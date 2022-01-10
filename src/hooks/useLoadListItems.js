import { useState } from 'react';

const urlRoot = 'https://avl-frontend-exam.herokuapp.com/api/users/';
const fetchData = (nextPage, type, params) => {
  let queries = Object.entries(params).map((p) => p.join('='));
  let url = urlRoot + `${type}?page=${nextPage}&${queries.join('&')}`;
  return fetch(url).then((response) => response.json());
};
const useLoadListItems = (type, params) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState();
  const loadMore = () => {
    setLoading(true);
    return fetchData(nextPage, type, params)
      .then((results) => {
        let newList = list.concat(results.data);
        setHasNextPage(newList.length < results.total);
        setNextPage((page) => page + 1);
        setList(newList);
        setLoading(false);
      })
      .catch((error) => setError(error));
  };

  return { loading, list, hasNextPage, error, loadMore };
};

export default useLoadListItems;
