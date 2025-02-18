import React from "react";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import { BlogPostProps } from "../../lib/types";

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  return (
    <div className={styles.container}>
      
<ul>
      <li><Link className={styles.title}href={{ pathname: "blog/" + post.slug }}>{post.title}</Link></li>
      <div className={styles.information}>
      <li>{post.publishedDate},  <i>{post.categories}</i></li>
      <li>{post.excerpt}</li>
      <li>{post.tags.map((tag: string, index: number) => (<span key={index} className={styles.tags}> {tag} </span> ))}</li>
      </div>
      </ul>
    </div>

  );
};

export default BlogCard;
