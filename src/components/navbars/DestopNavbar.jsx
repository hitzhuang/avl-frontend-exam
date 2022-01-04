import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import LogoIcon from '../LogoIcon';
import HomeNavButton from '../HomeNavButton';
import TabsNavButton from '../TabsNavButton';

const DestopNavbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80',
        height: '100vh',
        bgcolor: '#1b1b1b',
        paddingTop: '37px',
        paddingLeft: '23px',
        paddingRight: '22px',
        position: 'relative',
      }}
    >
      {/* logo */}
      <Link to="/">
        <LogoIcon />
      </Link>

      {/* home */}
      <Link to="/">
        <HomeNavButton
          sx={{
            position: 'absolute',
            top: '95px',
            left: '0px',
            right: '0px',
          }}
        />
      </Link>

      {/* tabs */}
      <Link to="/tabs">
        <TabsNavButton
          sx={{
            position: 'absolute',
            top: '159px',
            left: '0px',
            right: '0px',
          }}
        />
      </Link>
    </Box>
  );
};

export default DestopNavbar;
