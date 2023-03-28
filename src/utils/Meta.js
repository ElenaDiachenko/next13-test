import Head from 'next/head';

function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/next.svg" />
    </Head>
  );
}

export default Meta;
