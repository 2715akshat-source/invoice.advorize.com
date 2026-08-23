/**
 * Logo and signature uploads.
 *
 * The file is read with the File API, drawn to a canvas and re-encoded — it
 * never goes near a network. Re-encoding is not cosmetic: it caps the stored
 * dimensions (a 4000px logo is 3MB of base64 in a localStorage draft that
 * only has ~5MB to play with), and it normalises SVG, WebP, HEIC and anything
 * else the browser can decode down to the PNG or JPEG that pdf-lib accepts.
 *
 * Transparency decides the format. A logo with a transparent background must
 * stay PNG or it gains a black box; a photographed signature is far smaller
 * as a JPEG.
 */

export type LoadedImage = {
  /** data: URL, ready to store and to embed in the PDF */
  dataUrl: string;
  width: number;
  height: number;
};

const MAX_EDGE = 640;

export async function readImage(
  file: File,
  { maxEdge = MAX_EDGE }: { maxEdge?: number } = {},
): Promise<LoadedImage> {
  if (!file.type.startsWith("image/")) {
    throw new Error("That is not an image file.");
  }

  const source = await decode(file);

  const scale = Math.min(maxEdge / source.width, maxEdge / source.height, 1);
  const width = Math.max(1, Math.round(source.width * scale));
  const height = Math.max(1, Math.round(source.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("This browser would not give us a canvas.");
  ctx.drawImage(source.image, 0, 0, width, height);

  const transparent = hasAlpha(ctx, width, height);
  const dataUrl = transparent
    ? canvas.toDataURL("image/png")
    : canvas.toDataURL("image/jpeg", 0.92);

  if (source.revoke) source.revoke();

  return { dataUrl, width, height };
}

async function decode(file: File): Promise<{
  image: CanvasImageSource & { width: number; height: number };
  width: number;
  height: number;
  revoke?: () => void;
}> {
  /* An <img> handles every format the browser knows, SVG included, which
     createImageBitmap does not do consistently across engines. */
  const url = URL.createObjectURL(file);
  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("That image could not be read."));
      el.src = url;
    });

    /* An SVG without intrinsic dimensions reports 0 — give it a sane box
       rather than dividing by zero on the way to the canvas. */
    const width = image.naturalWidth || 512;
    const height = image.naturalHeight || 512;

    return { image, width, height, revoke: () => URL.revokeObjectURL(url) };
  } catch (error) {
    URL.revokeObjectURL(url);
    throw error;
  }
}

/**
 * Samples the alpha channel rather than reading every pixel — a 640×640 logo
 * is 400k pixels, and a stride of 4 answers the question just as well.
 */
function hasAlpha(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): boolean {
  try {
    const { data } = ctx.getImageData(0, 0, width, height);
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] < 250) return true;
    }
    return false;
  } catch {
    /* a tainted canvas cannot happen here — the source is a local file — but
       if reading ever fails, PNG is the answer that cannot look wrong */
    return true;
  }
}
