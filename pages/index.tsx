import type {NextPage} from 'next';
import PageContainer from 'components/PageContainer/PageContainer';
import HomePage from 'components/pageContent/HomePage/HomePage';
import Layout from 'components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <HomePage />
      </PageContainer>
    </Layout>
  );
};

export default Home;
