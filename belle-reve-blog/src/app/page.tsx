import BlogCard from '../components/BlogCard/BlogCard'
import Intro from '@/components/Intro/Intro';
import { getAllPosts } from '@/lib/utils'
import type { GetStaticProps } from 'next'
// import { BlogProps } from "@/lib/types";

export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <BlogCard></BlogCard>
    </div>
  );
}

export async function GetStaticProps() {
  const posts = await getAllPosts()

  return{
    props: {
      posts
    }
  }
}
