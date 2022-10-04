import {useRouter} from 'next/router';
import queryString from 'query-string';

const useRouters = () => {
  const router = useRouter();
  const {query, basePath} = router;

  const goToSelectedPage = (url: string) => {
    router.push(`/${url}`);
  };

  interface QueryObjectInterface {
    team?: string;
    newsId?: string;
  }

  const removeQueryString = () => {
    const newQuery = {...query, newsId: undefined};
    const querystring = queryString.stringify(newQuery);
    router.push(`${basePath}${querystring ? '?' + querystring : ''}`);
  };

  const addQueryParams = (newQueryParams: QueryObjectInterface) => {
    const newQuery = {...query, ...newQueryParams};
    const querystring = queryString.stringify(newQuery);
    router.push(`${basePath}?${querystring}`);
  };

  return {goToSelectedPage, query, addQueryParams, removeQueryString};
};

export default useRouters;
