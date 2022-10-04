import {useNewsContext} from 'context/NewsProvider';
import useDate from 'hooks/useDate';
import useRouters from 'routes/useRouters';

const useNews = () => {
  const {query} = useRouters();
  const {news} = useNewsContext();
  const {formatDate} = useDate();
  const initCurrentUser = {
    id: '',
    photo: 'Yaroslav.jfif',
    title: '',
    subTitle: '',
    publishedDate: new Date(),
    body: 'string',
  };

  const currentNews = news.reduce((res, el) => {
    return el.id === query.newsId ? el : res;
  }, initCurrentUser);

  const publishedDate = formatDate(currentNews?.publishedDate, 'EEEE d MMMM');

  return {...currentNews, publishedDate};
};

export default useNews;
