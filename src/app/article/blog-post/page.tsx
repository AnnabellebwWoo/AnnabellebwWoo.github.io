import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const blogPost = () => {
  return (
    <>
    <Image src='/images/Beach.jpg' alt='beach' width={500} height={500} className={styles.image}></Image>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed luctus ipsum. Sed scelerisque hendrerit cursus. Duis scelerisque neque blandit, venenatis augue nec, iaculis lacus. Morbi et nunc fermentum, consectetur orci in, sollicitudin sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare lacinia convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
    </>
  )
}

export default blogPost