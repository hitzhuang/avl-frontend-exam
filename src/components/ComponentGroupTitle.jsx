import React from 'react';
import { Typography } from '@mui/material';

const ComponentGroupTitle = (props) => {
  return (
    <Typography
      {...props}
      sx={{ fontWeight: 500, fontSize: '24px', lineHeight: '36px' }}
    >
      {props.text}
    </Typography>
  );
};

export default ComponentGroupTitle;
