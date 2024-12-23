import React from "react";
import Link from "next/link";
import styles from './NavBar.module.css';

const NavBar= () => {
    return(
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
    );
};

export default NavBar;