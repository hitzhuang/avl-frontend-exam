import { useState } from 'react';

const fetchData = (urlRoot, type, nextPage, pageSize) => {
  return fetch(urlRoot + `${type}?page=${nextPage}&pageSize=${pageSize}`).then(
    (response) => response.json()
  );
};

const useLoadListItems = (urlRoot, type, pageSize = 10) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState();
  const loadMore = () => {
    setLoading(true);
    fetchData(urlRoot, type, nextPage, pageSize)
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
