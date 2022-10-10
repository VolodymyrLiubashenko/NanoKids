import {useState, useEffect} from 'react';
import {useNewsContext} from 'context/NewsProvider';
import useDate from 'hooks/useDate';
import useRouters from 'routes/useRouters';

const initCurrentUser = {
  id: '1',
  photo: 'Yaroslav.jfif',
  title: '',
  subTitle: '',
  publishedDate: new Date(),
  body: 'string',
};

const useNews = () => {
  const {query} = useRouters();
  const {news} = useNewsContext();
  const {formatDate} = useDate();
  const [currentNews, setCurrentNews] = useState(initCurrentUser);
  console.log('currentNews: ', currentNews);

  useEffect(() => {
    setCurrentNews(
      news.reduce((res, el) => {
        return el.id === '10' ? el : res;
      }, initCurrentUser)
    );
  }, [query.newsId, news]);

  const publishedDate = formatDate(currentNews.publishedDate, 'EEEE d MMMM');

  return {...currentNews, publishedDate};
};

export default useNews;
