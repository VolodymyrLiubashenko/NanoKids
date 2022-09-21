import type {NextPage} from 'next';
import PageContainer from 'components/PageContainer/PageContainer';
import HomePage from 'components/pageContent/HomePage/HomePage';
import Layout from 'components/Layout/Layout';
import {useState} from 'react';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
      <PageContainer>
        <HomePage isOpen={isOpen} setIsOpen={setIsOpen} />
      </PageContainer>
    </Layout>
  );
};

export default Home;
