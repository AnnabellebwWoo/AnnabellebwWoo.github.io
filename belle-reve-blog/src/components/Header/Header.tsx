import React from "react";
import Link from "next/link";
import styles from './Header.module.css';

const Header= () => {
    return(
        <>
        <div className={styles.Logo}>
            <h1><Link href="/">Belle Reve</Link></h1>
            <h2>A Lifestyle Blog</h2>
        </div>
        <div className={styles.lineWrapper}>
            <hr className={styles.Line}/>
        </div>
                <nav className={styles.menuBar}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/category/beauty">Beauty</Link></li>
                        <li><Link href="/category/clothing">Clothing</Link></li>
                        <li><Link href="/category/favourites">Favourites</Link></li>
                        <li><Link href="/category/cooking">Cooking</Link></li>
                        <li><Link href="/category/opinion">Opinion</Link></li>
                        <li><Link href="/category/misc">Misc</Link></li>
                        <li><Link href="/about-me">About Me</Link></li>
                    </ul>
                </nav>
        <div className={styles.lineWrapper}>
            <hr className={styles.Line}/>
        </div>
        </>
    );
};

export default Header;