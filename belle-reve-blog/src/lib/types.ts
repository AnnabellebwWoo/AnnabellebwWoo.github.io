export type BlogFrontMatter = {
    title: string
    excerpt: string
    category: string[]
    publishedDate: string
  }
  
  export type BlogLayoutProps = {
    children: React.ReactNode
    frontMatter: BlogFrontMatter
  }
  
  export type BlogPostProps = {
    slug: string
    siteTitle: string
    frontMatter: BlogFrontMatter
    markdownBody: string
  }
  
  export type BlogPostsProps = {
    posts?: BlogPostProps[]
  }
  
  export interface BlogProps extends BlogPostsProps {
    title: string
    excerpt: string
    category: string[]
    publishedDate: string
    tags: string[]
  }