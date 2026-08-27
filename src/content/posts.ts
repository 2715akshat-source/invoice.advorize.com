/**
 * The blog registry.
 *
 * Newest first, which is the order the index shows. Split across files only
 * so each stays something a person can open and read — nothing depends on
 * which file a post lives in.
 */
import type { Post } from "./post-types";
import { postsA } from "./posts-a";
import { postsB } from "./posts-b";
import { postsC } from "./posts-c";
import { postsD } from "./posts-d";
import { postsE } from "./posts-e";
import { postsF } from "./posts-f";
import { postsG } from "./posts-g";

export type { Post } from "./post-types";

/* Sorted by date rather than by file, so the index is always genuinely
   newest-first and adding a file cannot quietly bury a new post. */
export const posts: Post[] = [
  ...postsA,
  ...postsB,
  ...postsC,
  ...postsD,
  ...postsE,
  ...postsF,
  ...postsG,
].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const postSlugs = posts.map((p) => p.slug);
