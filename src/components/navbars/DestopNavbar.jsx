import React from 'react';
import { Box } from '@mui/system';
import LogoNavLink from '../navlinks/LogoNavLink';
import HomeNavLink from '../navlinks/HomeNavLink';
import TabsNavLink from '../navlinks/TabsNavLink';

const DestopNavbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80px',
        minWidth: '80px',
        paddingTop: '35px',
        bgcolor: '#1b1b1b',
      }}
    >
      {/* logo */}
      <LogoNavLink />

      {/* home */}
      <HomeNavLink sx={{ marginTop: '38px', marginLeft: '1px' }} />

      {/* tabs */}
      <TabsNavLink sx={{ marginTop: '22px', marginLeft: '1px' }} />
    </Box>
  );
};

export default DestopNavbar;
