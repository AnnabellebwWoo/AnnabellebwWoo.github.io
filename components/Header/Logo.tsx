import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={styles.Logo}>
        <h1>
          <Link href="/blog">Belle Reve</Link>
        </h1>
        <h2>A Lifestyle Blog</h2>
      </div>
  );
};

export default Logo;
