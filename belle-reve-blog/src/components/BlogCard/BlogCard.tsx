import React from "react";
import styles from './BlogCard.module.css';
import Link from "next/link";
import Image from 'next/image'


const BlogCard= ( ) => {
    return(
       <div className={styles.container}>
       <Link href="/blog-post"><Image src="/images/Beach.jpg" alt="beach" width={500} height={500}className={styles.image}></Image></Link>
                 <ul className={styles.card}>
                    <h1><Link href="/blog-post">Title</Link></h1>
                   <p className={styles.excerpt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <hr className={styles.Line}></hr>
                    <ul className={styles.moreInfo}>
                        <li><Link href="/category/beauty">category</Link></li>
                        <li><p>01/02/2025</p></li>
                    </ul>
                    <hr className={styles.Line}></hr>
                  </ul>
       </div>
    );
};

export default BlogCard;