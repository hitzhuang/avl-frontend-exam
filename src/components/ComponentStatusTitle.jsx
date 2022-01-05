import React from 'react';
import { Typography } from '@mui/material';

const ComponentStatusTitle = ({ sx, text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '14px',
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default ComponentStatusTitle;
