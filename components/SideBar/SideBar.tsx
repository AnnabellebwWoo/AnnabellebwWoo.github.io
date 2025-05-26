import React from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <section>
        <h3>Featured Post</h3>
      </section>
      <section>
        <h3>Keep In Touch</h3>
        <ul className={styles.socials}>
          <li>
            <Link href="mailto:bellereveblog@gmail.com">
              <Image
                src="/images/email.png"
                width={50}
                height={50}
                alt="Email Icon"
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/bellereveblog/">
              <Image
                src="/images/instagram.png"
                width={50}
                height={50}
                alt="Instagram Icon"
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@bellereveblog">
              <Image
                src="/images/tiktok.png"
                width={50}
                height={50}
                alt="TikTok Icon"
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="https://open.spotify.com/user/annabellewoo911?si=5fbc0531a04d48cd">
              <Image
                src="/images/spotify.png"
                width={50}
                height={50}
                alt="Spotify Icon"
              ></Image>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h3>Recent Posts</h3>
        <ul>
          <li>
            <a href="/post/slug1">Recent Post 1</a>
          </li>
          <li>
            <a href="/post/slug2">Recent Post 2</a>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
