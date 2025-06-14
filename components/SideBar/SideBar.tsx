import React from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <section>
        <h3>Featured Post</h3>
        <ul>
          <Link href="/blog/post/prom-2023">
            <Image
              src="/images/prom.jpg"
              width={250}
              height={250}
              alt="prom"
              className={styles.featuredImage}
            ></Image>
            <h2><i>Prom 2023</i></h2>
            <h4>Read more</h4>{" "}
          </Link>
        </ul>
      </section>
      <section>
        <h3>Keep In Touch</h3>
        <ul className={styles.socials}>
          <li>
            <Link href="mailto:bellereveblog@gmail.com">
              <Image
                src="/images/email.png"
                width={40}
                height={40}
                alt="Email Icon"
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/bellereveblog/">
              <Image
                src="/images/instagram.png"
                width={40}
                height={40}
                alt="Instagram Icon"
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@bellereveblog">
              <Image
                src="/images/tiktok.png"
                width={40}
                height={40}
                alt="TikTok Icon"
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="https://open.spotify.com/user/annabellewoo911?si=5fbc0531a04d48cd">
              <Image
                src="/images/spotify.png"
                width={40}
                height={40}
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
            <Link href="/post/slug1">Recent Post 1</Link>
          </li>
          <li>
            <Link href="/post/slug2">Recent Post 2</Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
