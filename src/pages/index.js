import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Meta from '@/utils/Meta';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Meta title="Home" description="Test description" />
      <main className={styles.main}>Hello world</main>
    </>
  );
}
