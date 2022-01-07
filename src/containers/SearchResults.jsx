import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const SearchResults = () => {
  const query = useQuery();
  console.log(query.get('pageSize'));
  console.log(query.get('keyword'));

  return (
    <Box sx={{ border: '1px solid red' }}>
      <h1>results</h1>
    </Box>
  );
};

export default SearchResults;
