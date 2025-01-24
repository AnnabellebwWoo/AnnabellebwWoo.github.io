import React from "react";
import ReactMarkdown from "react-markdown";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import { getFiles, getPostBySlug } from "../../lib/utils";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <BlogLayout>
      <ReactMarkdown
        components={{
          a: ({ href, children }) => <Link href={href || "#"}>{children}</Link>,
        }}
      >
        {post.markdownBody}
      </ReactMarkdown>
    </BlogLayout>
  );
}

export async function generateStaticParams() {
  const posts = await getFiles();

  return posts.map((filename: string) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
