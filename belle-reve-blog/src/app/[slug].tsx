import React from 'react'
import ReactMarkdown from 'react-markdown'
import BlogLayout from "@/components/BlogLayout/BlogLayout";
import { BlogPostProps } from '@/lib/types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getFiles, getPostBySlug } from '@/lib/utils'
import { Params } from 'next/dist/next-server/server/router'

type CodeBlockProps = {
    language: string
    value: React.ReactNode
  }

type Params = {
    id: string;
  };

const CodeBlock = ({ language, value }: CodeBlockProps) => {
return (
    <div className="code-block">
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {value}
    </SyntaxHighlighter>
    </div>
)
}

const BlogPost = ({ frontMatter, markdownBody }: BlogPostProps) => {
  if (!frontMatter) return <></>

  return (
    <BlogLayout frontMatter={frontMatter}>
      <ReactMarkdown
        allowDangerousHtml={false}
        source={markdownBody}
        renderers={{
          code: CodeBlock,
          link: (props) => <CustomLink {...props} />,
        }}
      />
    </BlogLayout>
  )
}

export async function getStaticProps({ params }: Params) {
    const { frontMatter, markdownBody } = await getPostBySlug('blog', params.slug)
  
    return {
      props: {
        frontMatter,
        markdownBody,
      },
    }
  }
  
  export async function getStaticPaths() {
    const posts = await getFiles('blog')
  
    const paths = posts.map((filename: string) => ({
      params: {
        slug: filename.replace(/\.md/, ''),
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export default BlogPost