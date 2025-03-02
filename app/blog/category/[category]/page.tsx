import { getPostsByCategory } from "../../../../lib/utils";
import BlogCard from "../../../../components/BlogCard/BlogCard";
import styles from "./page.module.css";


export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = await getPostsByCategory(params.category);
  return (
    <div>
      <div className={styles.row}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
