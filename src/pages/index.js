import Image from 'next/image';
import Meta from '@/utils/Meta';
import CardItem from '@/components/CardItem';

export default function Home({ cards }) {
  return (
    <>
      <Meta title="Home" description="Test description" />
      <main className="w-1/3 mx-auto mt-10">
        {cards.map((card) => (
          <CardItem key={card._id} card={card} />
        ))}
      </main>
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
