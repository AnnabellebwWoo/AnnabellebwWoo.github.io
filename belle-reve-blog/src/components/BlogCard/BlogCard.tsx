import React from "react";
import styles from './BlogCard.module.css';

const BlogCard= () => {
    return(
       <>
        <div className={styles.row}>
            <div className={styles.column} style={{backgroundColor: 'red'}}>
                <div>Column 1</div>
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