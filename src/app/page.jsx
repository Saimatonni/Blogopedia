import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/home.png'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Welcome to Blogopedia.
        </h1>
        <p className={styles.desc}>
        Explore a wide range of topics , and dive deep into the world of Knowledge
        </p>
        <Button url="/portfolio" text="See More"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
