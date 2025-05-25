import React from "react";
// import ReactMarkdown from "react-markdown";
import BlogLayout from "../../../../components/BlogLayout/BlogLayout";
import { getFiles, getPostBySlug } from "../../../../lib/utils";
// import Link from "next/link";
import { parseMarkdownToSections } from "../../../../lib/parseMarkdown";
import Image from "next/image";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const sections = parseMarkdownToSections(post.markdownBody);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    // <BlogLayout post={post}>
    //   <ReactMarkdown
    //     components={{
    //       a: ({ href, children }) => <Link href={href || "#"}>{children}</Link>,
    //     }}
    //   >
    //     {post.markdownBody}
    //   </ReactMarkdown>
    // </BlogLayout>

    <BlogLayout post={post}>
      <article className="prose">
        {sections.map((section, i) => {
          if (section.type === "text") {
            return section.content.map((para, j) => (
              <p key={`text-${i}-${j}`}>{para}</p>
            ));
          }

          if (section.type === "image") {
            return section.content.map((url, j) => (
              <div key={`img-${i}-${j}`} className="my-4">
                <Image
                  src={url}
                  alt=""
                  width={800}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover"
                />{" "}
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
