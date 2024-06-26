import { Metadata } from "next";
import { BRANCH_NAME } from "./app.config";

export type HeadingTag = {
  noindex?: string;
  prev?: string;
  next?: string;
  canonical?: string;
  meta_description?: string;
  key?: string;
  title?: string;
};

export function generateHeadingTag(metadata: HeadingTag): Metadata {
  console.log("metadata", metadata);
  const metaNext = metadata.next ? { rel: "next", url: metadata.next } : null;
  const metaPrev = metadata.prev ? { rel: "prev", url: metadata.prev } : null;
  const other = [metaNext, metaPrev].filter((e) => e !== null);

  return {
    title: BRANCH_NAME + " - " + metadata.title,
    robots: metadata.noindex ? "noindex" : "",
    description: metadata.meta_description,
    icons: {
      icon: "/favicon.ico",
      // other: other,
    },
    alternates: {
      canonical: metadata.canonical,
    },
  };
}
