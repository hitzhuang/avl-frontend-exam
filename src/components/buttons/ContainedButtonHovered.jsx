import React from 'react';
import { Button } from '@mui/material';

const ContainedButtonHovered = (props) => {
  return (
    <Button
      sx={{
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '12px',
        border: '1px solid white',
        lineHeight: 1.5,
        color: 'white',
        backgroundColor: '#121212',
        borderRadius: '20px',
        fontFamily: 'Open Sans',
        minWidth: '10px',
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};

export default ContainedButtonHovered;
