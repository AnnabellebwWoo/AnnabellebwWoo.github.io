import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
 
const AboutPage = () => {
  return (
    <div className={styles.about}>
      <Image src="/images/annabelle-woo.jpg" alt="Annabelle Woo" width={300} height={400} className={styles.image}></Image>
      <div className={styles.text}>
        <p>Belle Reve is a blog created by Annabelle Woo. Magazines and websites were my favourite mediums for learning about fashion, beauty, and current events. After frequenting my favourite sites like Vogue, Harper’s Bazaar, and Into The Gloss, I decided to create a blog.</p>
        <p>Belle Reve was born to express all of my interests. Varying from fashion and beauty to baking and trying new things. I hope you enjoy digesting the content as much as I like creating it.</p>
     </div>
  </div>
  )
}

export default AboutPage