import BlogCard from '../components/BlogCard/BlogCard'
import Intro from '@/components/Intro/Intro';
import styles from './page.module.css';
import { getAllPosts } from '@/lib/utils'
import type { GetStaticProps } from 'next'

export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <div className={styles.row}>
                  <div className={styles.column}>
                    <BlogCard></BlogCard>
                    </div>
                  <div className={styles.column}>
                  <BlogCard></BlogCard>
                  </div>
                  <div className={styles.column}>
                  <BlogCard></BlogCard>
                  </div>
              </div>
              <div className={styles.row}>
                  <div className={styles.column}>
                    <BlogCard></BlogCard>
                    </div>
                  <div className={styles.column}>
                  <BlogCard></BlogCard>
                  </div>
                  <div className={styles.column}>
                  <BlogCard></BlogCard>
                  </div>
              </div>
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
