import useSentEmail from 'api/hooks/useSentEmail';
import ContactForm from './ContactForm';

const WithContactForm = () => {
  const {sent, data, isLoading} = useSentEmail();

  return <ContactForm sent={sent} response={data} isLoading={isLoading} />;
};

export default WithContactForm;
