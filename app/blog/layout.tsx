import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import styles from "./layout.module.css";
import { getRecentPosts } from "../../lib/utils";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const recentPosts = await getRecentPosts(2);
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>{children}</main>
      <Sidebar recentPosts={recentPosts} />{" "}
    </div>
  );
}
