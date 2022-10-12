import {useRouter} from 'next/router';
import queryString from 'query-string';

export interface QueryObjectInterface {
  team?: string;
  newsId?: string;
  contactForm?: boolean;
}

const useRouters = () => {
  const router = useRouter();
  const {query} = router;

  const goToSelectedPage = (url: string) => {
    router.push(`${url}`);
  };

  const removeQueryString = () => {
    const newQuery = {...query, newsId: undefined, contactForm: undefined};
    const querystring = queryString.stringify(newQuery);
    router.push(
      `${process.env.NEXT_PUBLIC_BASEURL}${
        querystring ? '?' + querystring : ''
      }`
    );
  };

  const addQueryParams = (newQueryParams: QueryObjectInterface) => {
    const newQuery = {...query, ...newQueryParams};
    const querystring = queryString.stringify(newQuery);
    router.push(`${process.env.NEXT_PUBLIC_BASEURL}?${querystring}`);
  };

  return {goToSelectedPage, query, addQueryParams, removeQueryString};
};

export default useRouters;
