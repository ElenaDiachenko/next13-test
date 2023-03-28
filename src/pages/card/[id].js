import React from 'react';

const Card = () => {
  return <div>Card</div>;
};

export async function getStaticPaths() {
  const res = await fetch('http:localhost:3000/api/cards');
  const cards = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = cards.map((card) => ({
    params: { id: card._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const res = await fetch(`http:localhost:3000/api/cards/${params.id}`);
  const card = await res.json();

  // Pass data to the page via props
  return { props: { card }, revalidate: 10 };
}

export default Card;
