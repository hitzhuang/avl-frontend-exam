import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ mobileScreen }) => {
  const renderMobileNavbar = () => <Box>logo</Box>;
  const renderBrowserNavbar = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80',
        height: '100vh',
        bgcolor: '#1b1b1b',
      }}
    >
      <Typography>LOGO</Typography>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/tabs">Tabs</Link>
        </ul>
      </nav>
    </Box>
  );

  return mobileScreen ? renderMobileNavbar() : renderBrowserNavbar();
};

export default Navbar;
