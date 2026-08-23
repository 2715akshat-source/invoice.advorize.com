import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";

export default function NotFound() {
  return (
    <section className="shell flex min-h-screen flex-col justify-center py-32">
      <h1 className="display max-w-[12ch] text-[13vw] leading-[0.95] md:text-[8vw]">
        Nothing filed here
      </h1>
      <p className="mt-10 max-w-[52ch] text-lg text-muted md:text-xl">
        The page you were after does not exist. The generator itself is on the
        home page, and it is the only page you need.
      </p>
      <Magnetic className="mt-14 w-fit">
        <TransitionLink
          href="/"
          data-cursor="hover"
          className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-accent text-center text-sm font-medium text-white md:h-40 md:w-40"
        >
          Make an
          <br />
          invoice
        </TransitionLink>
      </Magnetic>
    </section>
  );
}
