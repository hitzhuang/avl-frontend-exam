import React from 'react';
import { Box, Typography } from '@mui/material';

const OutlinedButtonHovered = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '27px',
        border: '1px solid white',
        borderRadius: '20px',
        cursor: 'pointer',
        color: '#121212',
        bgcolor: 'white',
        ...props.sx,
      }}
    >
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: 600,
          fontFamily: 'Open Sans',
          lineHeight: '12px',
          textAlign: 'center',
          textTransform: 'none',
          margin: '9px',
        }}
      >
        {props.children}
      </Typography>
    </Box>
  );
};

export default OutlinedButtonHovered;
