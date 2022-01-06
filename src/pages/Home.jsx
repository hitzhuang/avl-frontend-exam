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
        width: '1360px',
      }}
    >
      {/* home page content using nested routes */}
      <Box sx={{ width: '100%' }}>
        <Outlet />
      </Box>

      {/* display profile only when the screen width matches more than 1360px */}
      {matches && <Profile />}
    </Box>
  );
};

export default Home;
