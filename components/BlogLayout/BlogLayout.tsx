import React, { ReactNode } from "react";
import { BlogPostProps } from "../../lib/types";
import Image from "next/image";

const BlogLayout = ({
  post,
  children,
}: {
  post: BlogPostProps;
  children: ReactNode;
}) => {
  return (
    <div className="blog-layout">
      {post.thumbnail && post.thumbnail.trim() !== "" && (
        <Image
          src={post.thumbnail}
          alt={post.title + " image"}
          width={400}
          height={300}
        ></Image>
      )}
      {children}
    </div>
  );
};

export default BlogLayout;
