import React from 'react';
import { Typography } from '@mui/material';

const ComponentTypeTitle = ({ sx, text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.25px',
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default ComponentTypeTitle;
