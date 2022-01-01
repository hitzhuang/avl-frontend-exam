import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Search from '../containers/Search';
import Results from '../containers/Results';
import Profile from '../containers/Profile';

const Home = () => {
  const [result, setResult] = useState([]);
  const matches = useMediaQuery('(min-width:1440px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ border: '1px solid red', width: '100%' }}>
        {result.length === 0 ? <Search /> : <Results />}
      </Box>
      {matches && <Profile />}
    </Box>
  );
};

export default Home;
