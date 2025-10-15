export type BlogLayoutProps = {
  children: React.ReactNode;
};

export type BlogPostProps = {
  categories: string[];
  title: string;
  slug: string;
  markdownBody: string;
  publishedDate: string;
  excerpt: string;
  tags: string[];
  thumbnail: string;
  previous?: BlogPostProps;
  next?: BlogPostProps;
};

export type Section =
  | { type: "text" | "heading" | "list"; content: React.ReactNode }
  | { type: "image"; content: string[] };
