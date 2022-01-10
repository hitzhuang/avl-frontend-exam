import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import LogoNavLink from '../navlinks/LogoNavLink';
import BackNavLink from '../navlinks/BackNavLink';

const MobileNavbar = () => {
  const isHome = useLocation().pathname === '/';

  return (
    <Box sx={styles.root}>
      {isHome ? (
        <LogoNavLink sx={styles.home} />
      ) : (
        <BackNavLink sx={styles.back}>Home Page</BackNavLink>
      )}
    </Box>
  );
};

const styles = {
  root: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    bgcolor: '#181818',
    position: 'relative',
  },
  home: {
    paddingTop: '28px',
    paddingLeft: '21px',
  },
  back: {
    color: 'white',
    marginLeft: '13.16px',
    fontSize: '24px',
    lineHeight: '36px',
  },
};

export default MobileNavbar;
