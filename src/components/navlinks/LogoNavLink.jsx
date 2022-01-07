import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import LOGO from '../../assets/logo.svg';

const LogoNavLink = ({ sx }) => {
  return (
    <Link to="/">
      <Box sx={{ ...sx }}>
        <img src={LOGO} alt="logo" width={35} height={15} />
      </Box>
    </Link>
  );
};

export default LogoNavLink;
