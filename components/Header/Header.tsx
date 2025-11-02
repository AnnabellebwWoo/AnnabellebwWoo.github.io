"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import HeaderLinks from "./HeaderLinks";
import SidebarOverlay from "../SideBar/SideBarOverlay";
import type { BlogPostProps } from "../../lib/types";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <>
      <header className={styles.header}>
        <Logo />
        <HeaderLinks />
        <button
          aria-label="Open menu"
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      <SidebarOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        recentPosts={recentPosts}
      />
    </>
  );
}
