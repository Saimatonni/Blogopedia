import React from "react";
import styles from "./footer.module.css";
//import Image from "next/image";
import Image from 'next/image'
import fb from 'public/1.png'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Saima. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="saima"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="saima"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="saima"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="saima"
        />
      </div>
    </div>
  );
};

export default Footer;
