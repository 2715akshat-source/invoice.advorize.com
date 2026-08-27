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

export type { Post } from "./post-types";

export const posts: Post[] = [...postsA, ...postsB, ...postsC];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const postSlugs = posts.map((p) => p.slug);
