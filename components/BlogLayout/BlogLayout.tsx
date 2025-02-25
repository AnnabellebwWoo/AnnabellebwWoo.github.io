import React, { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return <div className="blog-layout">{children}</div>;
};

export default BlogLayout;
