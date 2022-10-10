import {news} from 'db/news';
import {createDateFromString} from 'hooks/useDate';
import {NewsInterface} from 'interfaces/news';

interface NewsApiInterface {
  getNews: () => NewsInterface[];
}

const newsApi: NewsApiInterface = {
  getNews: () => {
    return news.map((el) => {
      const publishedDate = createDateFromString(String(el.publishedDate));
      return {...el, publishedDate};
    });
  },
};

export default newsApi;
