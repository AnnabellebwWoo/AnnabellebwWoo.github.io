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
};

export type Section =
  | { type: "text"; content: string[] }
  | { type: "image"; content: string[] };
