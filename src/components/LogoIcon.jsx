import React from 'react';
import { Box } from '@mui/system';
import LOGO from '../assets/logo.svg';

const LogoIcon = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <img src={LOGO} alt="logo" />
    </Box>
  );
};

export default LogoIcon;
