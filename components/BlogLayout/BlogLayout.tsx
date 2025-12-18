"use client";

import { Section, BlogPostProps } from "../../lib/types";
import Image from "next/image";
import styles from "./BlogLayout.module.css";
import Link from "next/link";
import React from "react";
import ShikiHighlighter from "react-shiki";

const BlogLayout = ({
  post,
  previous,
  next,
  sections,
}: {
  post: BlogPostProps;
  previous?: BlogPostProps | null;
  next?: BlogPostProps | null;
  sections: Section[];
}) => {
  const hasThumbnail = post.thumbnail && post.thumbnail.trim() !== "";
  return (
    <div className={styles.container}>
      {hasThumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title + " image"}
          width={800}
          height={600}
          className={styles.image}
        />
      )}
      <div className={styles.title}>{post.title}</div>
      <ul className={styles.info}>
        <li>
          {new Date(post.publishedDate).toLocaleDateString("en-CA", {
            timeZone: "America/Toronto",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          <i>{post.categories.join(", ")}</i>
        </li>

        <li className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </li>
      </ul>
      <div className={styles.children}>
        {sections.map((section, index) => {
          if (section.type === "text") {
            return <div key={index}>{section.content}</div>;
          }
          if (section.type === "image") {
            return section.content.map((url, i) => (
              <Image
                key={`${index}-${i}`}
                src={url}
                alt={`Image ${i}`}
                width={600}
                height={400}
                className={styles.image}
              />
            ));
          }
          if (section.type === "heading") {
            return (
              <div key={index} className={styles.headingSection}>
                {section.content}
              </div>
            );
          }
          if (section.type === "list") {
            return (
              <React.Fragment key={index}>{section.content}</React.Fragment>
            );
          }
          if (section.type == "code") {
            return (
              <ShikiHighlighter
                key={index}
                language={section.lang}
                theme={"github-dark"}
              >
                {section.content}
              </ShikiHighlighter>
            );
          }
          return null;
        })}
      </div>
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
