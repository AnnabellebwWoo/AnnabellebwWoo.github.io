import React from 'react'
import { ReactNode } from 'react'
import styles from './layout.module.css'


export default function ArticleLayout({ children }: {children: ReactNode}) {
  return (
    <div className={styles.container}>
         <section className={styles.content}>{children}</section>
    </div>
  )
}

