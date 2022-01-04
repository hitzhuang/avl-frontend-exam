import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import LogoIcon from '../LogoIcon';
import BackIcon from '../../assets/back.svg';
import { Typography } from '@mui/material';

const MobileNavbar = () => {
  const isHome = useLocation().pathname === '/';
  const renderHome = () => (
    <LogoIcon sx={{ paddingTop: '28px', paddingLeft: '21px' }} />
  );
  const renderBack = () => (
    <Link to="/">
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {/* back icon */}
        <img src={BackIcon} with={26} height={26} alt="back icon" />
        {/* back title */}
        <Typography
          sx={{
            fontFamily: 'Ubuntu',
            color: 'white',
            marginLeft: '13.16px',
            fontSize: '24px',
            lineHeight: '36px',
          }}
        >
          Home Page
        </Typography>
      </Box>
    </Link>
  );
  return (
    <Box
      sx={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        bgcolor: '#181818',
        position: 'relative',
      }}
    >
      {isHome ? renderHome() : renderBack()}
    </Box>
  );
};

export default MobileNavbar;
