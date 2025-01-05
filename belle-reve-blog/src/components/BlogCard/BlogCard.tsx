import React from "react";
// import styles from './BlogCard.module.css';
import Link from "next/link";
// import Image from 'next/image'


const BlogCard= ( { posts }: BlogPostsProps ) => {
    return(
    //    <div className={styles.container}>
    //    <Link href="/article/blog-post"><Image src="/images/Beach.jpg" alt="beach" width={500} height={500}className={styles.image}></Image></Link>
    //              <ul className={styles.card}>
    //                 <h1><Link href="/article/blog-post">Title</Link></h1>
    //                <p className={styles.excerpt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                 <hr className={styles.Line}></hr>
    //                 <ul className={styles.moreInfo}>
    //                     <li><Link href="/category/beauty">category</Link></li>
    //                     <li><p>01/02/2025</p></li>
    //                 </ul>
    //                 <hr className={styles.Line}></hr>
    //               </ul>
    //    </div>

       <div className="posts">
       {!posts && <div>No posts!</div>}
       <ul>
         {posts &&
           posts
             .sort(
               (a, b) =>
                 new Date(b.frontMatter.publishedDate).getTime() - new Date(a.frontMatter.publishedDate).getTime(),
             )
             .map((post) => {
               return (
                 <article key={post.slug} className="post-title">
                   <Link href={{ pathname: `/blog/${post.slug}` }}>
                     <a>{post.frontMatter.title}</a>
                   </Link>{' '}
                   - {post.frontMatter.description}
                   <p>[ {post.frontMatter.tags.join(', ')} ]</p>
                 </article>
               )
             })}
       </ul>
     </div>
    );
};

export default BlogCard;