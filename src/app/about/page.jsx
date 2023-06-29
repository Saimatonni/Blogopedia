import React from 'react'
import styles from "./page.module.css";
import Image from "next/image";
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/about1.png"
          width={300}
          height={180}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Software developers</h1>
          <h2 className={styles.imgDesc}>
          Designs, Creates, and maintains software
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          CSE Undergraduate Student at University of Dhaka
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            
            <br />
            <br /> - Create Websites
            <br />
            <br /> - Design
            <br />
            <br /> - Maintains
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
