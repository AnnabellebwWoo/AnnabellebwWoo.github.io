import React, { ReactNode } from "react";
import { BlogPostProps } from "../../lib/types";
import Image from "next/image";
import styles from "./BlogLayout.module.css";
import Link from "next/link";

const BlogLayout = ({
  post,
  previous,
  next,
  children,
}: {
  post: BlogPostProps;
  previous?: BlogPostProps | null;
  next?: BlogPostProps | null;
  children: ReactNode;
}) => {

  return (
    <div className={styles.container}>
      {post.thumbnail && post.thumbnail.trim() !== "" && (
        <Image
          src={post.thumbnail}
          alt={post.title + " image"}
          width={400}
          height={300}
          className={styles.image}
        ></Image>
      )}
      <div className={styles.title}>{post.title}</div>
      <ul className={styles.info}>
        <li>
          {post.publishedDate} <i>{post.categories}</i>
        </li>
        <li className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </li>
      </ul>
      <div className={styles.children}>{children}</div>
      <div className={styles.navigation}>
  {previous && (
    <Link href={`/blog/post/${previous.slug}`} className={styles.navLink}>
      ← Previous Post: {previous.title}
    </Link>
  )}
  {next && (
    <Link href={`/blog/post/${next.slug}`} className={styles.navLink}>
      Next Post: {next.title} →
    </Link>
  )}
</div>

    </div>
  );
};

export default BlogLayout;
