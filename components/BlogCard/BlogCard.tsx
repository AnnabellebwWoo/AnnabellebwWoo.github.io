import React from "react";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import { BlogPostProps } from "../../lib/types";
import Image from "next/image";

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  const thumbnail = post.thumbnail?.trim() || null;
  const hasThumbnail = !!thumbnail;

  return (
    <ul className={styles.container}>
      <li>
        <Link href={{ pathname: "/blog/post/" + post.slug }}>
          <div className={styles.imageWrapper}>
            {hasThumbnail ? (
              <Image
                src={thumbnail as string}
                alt={post.title + " image"}
                width={400}
                height={300}
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholder}></div>
            )}
          </div>
        </Link>
      </li>

      <li>
        <ul className={styles.text}>
          <li>
            <Link
              className={styles.title}
              href={{ pathname: "/blog/post/" + post.slug }}
            >
              {post.title}
            </Link>
          </li>

          <div className={styles.information}>
            <li>
              {new Date(post.publishedDate).toLocaleDateString("en-CA", {
                timeZone: "America/Toronto",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              , <i>{post.categories}</i>
            </li>

            <li>{post.excerpt}</li>

            <li className={styles.tags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </li>
          </div>
        </ul>
      </li>
    </ul>
  );
};

export default BlogCard;
