import React from 'react';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

import HomeNavLink from '../navlinks/HomeNavLink';
import TabsNavLink from '../navlinks/TagsNavLink';

const BottomNavbar = () => {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'rgba(24, 24, 24, 0.8)',
      }}
      variant="1"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '66px',
        }}
      >
        <HomeNavLink showLabel={false} sx={{ mr: '50px' }} />
        <TabsNavLink showLabel={false} />
      </Box>
    </Paper>
  );
};

export default BottomNavbar;
