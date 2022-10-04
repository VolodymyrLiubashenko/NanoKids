import useDate from 'hooks/useDate';
import {useQuery} from '@tanstack/react-query';
import newsApi from 'api/newsApi';

const useNewsApi = () => {
  const {createDateFromString} = useDate();
  const {data} = useQuery(['getNews'], newsApi.getNews, {
    initialData: [
      {
        id: '1',
        photo: 'Yaroslav.jfif',
        title: 'Назва Статті',
        subTitle: 'Коротке описання статті',
        publishedDate: createDateFromString('09.30.2022'),
        body: 'ТекстСтатті',
      },
    ],
    onSuccess: (data) => {
      data.map((el) => {
        el.publishedDate = createDateFromString(String(el.publishedDate));
        return el;
      });
    },
  });

  return {data};
};

export default useNewsApi;
