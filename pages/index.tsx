import type {NextPage} from 'next';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/pageContent/HomePage/HomePage';
import {useState} from 'react';

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
