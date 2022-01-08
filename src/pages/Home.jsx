import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import Profile from '../containers/Profile';

const Home = () => {
  const matches = useMediaQuery('(min-width:1440px)');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '375px',
      }}
    >
      {/* home page content using nested routes */}
      {/* route settings could be found from App component  */}
      {/* components: Search & SearchResults */}
      <Outlet />

      {/* display profile only when the screen width matches more than 1440px */}
      {matches && <Profile mobileScreen />}
    </Box>
  );
};

export default Home;
