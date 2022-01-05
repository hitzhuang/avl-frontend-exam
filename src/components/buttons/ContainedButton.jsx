import React from 'react';
import { Button } from '@mui/material';

const ContainedButton = (props) => {
  return (
    <Button
      sx={{
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '12px',
        border: '1px solid white',
        lineHeight: 1.5,
        color: '#121212',
        backgroundColor: 'white',
        borderRadius: '20px',
        fontFamily: 'Open Sans',
        minWidth: '10px',
        '&:hover': {
          color: 'white',
          backgroundColor: '#121212',
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};

export default ContainedButton;
