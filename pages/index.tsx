import type {NextPage} from 'next';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/pageContent/HomePage/HomePage';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Футбол для дітей в Одесі | NanoKids</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default Home;
