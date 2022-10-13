import Layout from 'components/Layout/Layout';
import ContactUsPage from 'components/pageContent/ContactUsPage/ContactUsPage';
import {NextPage} from 'next';
import Head from 'next/head';

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>NanoKids | Контакти</title>
      </Head>
      <Layout>
        <ContactUsPage />
      </Layout>
    </>
  );
};

export default ContactUs;
