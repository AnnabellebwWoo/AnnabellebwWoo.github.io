import React from "react";

const NavBar= () => {
    return(
        <nav className="menu-bar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="/category/beauty">Beauty</a></li>
                    <li><a href="/category/clothing">Clothing</a></li>
                    <li><a href="/category/favourites">Favourites</a></li>
                    <li><a href="/category/cooking">Cooking</a></li>
                    <li><a href="/category/opinion">Opinion</a></li>
                    <li><a href="/category/misc">Misc</a></li>
                    <li><a href="/about-me">About Me</a></li>
                </ul>
        </nav>
    );
};

export default NavBar;