import React from "react";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import { BlogPostProps } from "../../lib/types";
import Image from "next/image";

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  console.log("Image URL:", post.thumbnail);
  return (
    <ul className={styles.container}>
      <li>
        <div className={styles.imageWrapper}>
          <Image
            src={post.thumbnail}
            alt={post.title + " image"}
            width={400}
            height={300}
            className={styles.image}
          ></Image>
        </div>
      </li>
      <li>
        <ul className={styles.text}>
          <li>
            <Link
              className={styles.title}
              href={{ pathname: "blog/" + post.slug }}
            >
              {post.title}
            </Link>
          </li>
          <div className={styles.information}>
            <li>
              {post.publishedDate}, <i>{post.categories}</i>
            </li>
            <li>{post.excerpt}</li>
            <li>{post.tags}</li>
          </div>
        </ul>
      </li>
    </ul>
  );
};

export default BlogCard;
