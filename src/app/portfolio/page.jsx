import React from 'react'
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/developing" className={styles.item}>
          <span className={styles.title}>Developing</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/desing" className={styles.item}>
          <span className={styles.title}>Design</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio
