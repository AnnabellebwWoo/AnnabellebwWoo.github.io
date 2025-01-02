import React from "react";
import styles from './BlogCard.module.css';
import Link from "next/link";
// import { BlogPostsProps } from "@/lib/types";

const BlogCard= ( ) => {
    return(
       <>
        <div className={styles.row}>
            <div className={styles.column}>
                    
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
            <div className={styles.column} style={{backgroundColor: 'green'}}>
                    <div>Column 2</div>
            </div>
            <div className={styles.column} style={{backgroundColor: 'blue'}}>
                <div>Column 3</div>
            </div>
        </div>
       </>
    );
};

export default BlogCard;