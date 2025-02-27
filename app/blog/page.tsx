import BlogCard from "../../components/BlogCard/BlogCard";
import Intro from "../../components/Intro/Intro";
import styles from "./page.module.css";
import { getAllPosts } from "../../lib/utils";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div>
      <Intro></Intro>
      <div className={styles.row}>
        {posts.map((post) => {
          return <BlogCard key={post.title} post={post} />;
        })}
      </div>
    </div>
  );
}
