import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Meta from '@/utils/Meta';

export default function Home({ cards }) {
  console.log(cards);

  return (
    <>
      <Meta title="Home" description="Test description" />
      <main className={styles.main}>Hello world</main>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`http:localhost:3000/api/cards`);
  const cards = await res.json();

  // Pass data to the page via props
  return { props: { cards }, revalidate: 10 };
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http:localhost:3000/api/cards`);
//   const cards = await res.json();

//   // Pass data to the page via props
//   return { props: { cards } };
// }
