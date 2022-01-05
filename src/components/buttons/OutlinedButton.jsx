import React from 'react';
import { Button, Typography } from '@mui/material';

const OutlinedButton = (props) => {
  return (
    <Button
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '27px',
        color: 'white',
        bgcolor: '#121212',
        border: '1px solid white',
        borderRadius: '20px',
        cursor: 'pointer',
        minWidth: '10px',
        '&:hover': {
          bgcolor: 'white',
          color: '#121212',
        },
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
        }}
      >
        {props.children}
      </Typography>
    </Button>
  );
};

export default OutlinedButton;
