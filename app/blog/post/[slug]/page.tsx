import React from "react";
import BlogLayout from "../../../../components/BlogLayout/BlogLayout";
import { getFiles, getPostBySlug, getAdjacentPosts } from "../../../../lib/utils";
import { parseMarkdownToSections } from "../../../../lib/parseMarkdown";
import Image from "next/image";
import type { Section } from "../../../../lib/types";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const { previous, next } = await getAdjacentPosts(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const sections: Section[] = parseMarkdownToSections(post.markdownBody);

  return (
      <BlogLayout post={post} previous={previous} next={next}>
      <article className="prose prose-lg max-w-none">
        {sections.map((section, i) => {
          if (section.type === "text") {
            return <p key={`text-${i}`}>{section.content}</p>;
          }

          if (section.type === "image") {
            return section.content.map((url, j) => (
              <div key={`img-${i}-${j}`} className="my-6">
                <Image
                  src={url}
                  alt=""
                  width={800}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            ));
          }

          return null;
        })}
      </article>
    </BlogLayout>
  );
}

export async function generateStaticParams() {
  const posts = await getFiles();

  return posts.map((filename: string) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
