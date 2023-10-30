import Head from 'next/head';

const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
};

export default Seo;
