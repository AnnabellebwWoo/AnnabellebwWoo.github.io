import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import styles from "./layout.module.css"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>{children}</main>
      <Sidebar />
    </div>
  );
}
