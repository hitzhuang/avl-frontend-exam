import React from 'react';
import { Button } from '@mui/material';

const StyledButtonHovered = (props) => {
  return (
    <Button
      sx={{
        bgcolor: '#121212',
        color: 'white',
        width: '343px',
        height: '40px',
        fontFamily: 'Ubuntu',
        fontSize: '14px',
        lineHeight: '14px',
        fontWeight: 700,
        border: '1px solid white',
        borderRadius: '4px',
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};

export default StyledButtonHovered;
