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
        <LogoNavLink sx={styles.logo} />
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
    paddingLeft: '21px',
    bgcolor: '#181818',
    position: 'relative',
    mb: '1px',
  },
  logo: {
    mt: '3px',
  },
  back: {
    color: 'white',
    marginLeft: '13.16px',
    fontSize: '24px',
    lineHeight: '36px',
  },
};

export default MobileNavbar;
