import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import BackIcon from '../../assets/back.svg';

const BackNavLink = ({ sx, children }) => {
  return (
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
        <Typography sx={sx}>{children}</Typography>
      </Box>
    </Link>
  );
};

export default BackNavLink;
