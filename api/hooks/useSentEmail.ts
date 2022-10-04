import {useMutation} from '@tanstack/react-query';
import {InitialValuesInterface} from 'components/ContactForm/ContactForm';
import sentEmailApi from 'api/sentEmailApi';

const useSentEmail = () => {
  const {
    data,
    mutate: sent,
    isLoading,
  } = useMutation((values: InitialValuesInterface) =>
    sentEmailApi.sent(values)
  );
  return {data, sent, isLoading};
};

export default useSentEmail;
