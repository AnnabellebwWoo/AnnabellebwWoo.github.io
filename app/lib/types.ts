  export type BlogLayoutProps = {
    children: React.ReactNode
  }
  
  export type BlogPostProps = {
    categories: string[]
    title: string
    slug: string
    markdownBody: string
    publishedDate: string
  }