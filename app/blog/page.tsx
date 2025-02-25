import BlogCard from "../../components/BlogCard/BlogCard";
import Intro from "../../components/Intro/Intro";
import styles from "./page.module.css";
import { getAllPosts } from "../../lib/utils";
// import { BlogPostProps } from "../lib/types";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div>
      <Intro></Intro>
      <div className={styles.row}>
        {/* <div className={styles.column}>
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
                  </div> */}
        {posts.map((post) => {
          return <BlogCard key={post.title} post={post} />;
        })}

        {/* <BlogCard post={post} /> */}
      </div>
    </div>
  );
}
