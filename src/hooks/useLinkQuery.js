import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useLinkQuery = (params = []) => {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  return params.map((p) => query.get(p));
};

export default useLinkQuery;
