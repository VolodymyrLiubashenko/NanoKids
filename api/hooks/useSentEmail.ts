import {useMutation} from '@tanstack/react-query';
import {initialValuesInterface} from 'components/ContactForm/ContactForm';
import sentEmailApi from 'api/sentEmailApi';

const useSentEmail = () => {
  const {
    data,
    mutate: sent,
    isLoading,
  } = useMutation((values: initialValuesInterface) =>
    sentEmailApi.sent(values)
  );
  return {data, sent, isLoading};
};

export default useSentEmail;
