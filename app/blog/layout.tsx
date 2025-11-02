"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import styles from "./layout.module.css";
import type { BlogPostProps } from "../../lib/types";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [recentPosts, setRecentPosts] = useState<BlogPostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        const posts: BlogPostProps[] = await res.json();
        setRecentPosts(posts.slice(0, 2));
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>{children}</main>

      <Sidebar recentPosts={recentPosts} className={styles.desktopSidebar} />
    </div>
  );
}
