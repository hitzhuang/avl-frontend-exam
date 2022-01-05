import React from 'react';
import { Button } from '@mui/material';

const StyledButton = (props) => {
  return (
    <Button
      sx={{
        color: '#121212',
        bgcolor: 'white',
        width: '335px',
        height: '40px',
        fontFamily: 'Ubuntu',
        fontSize: '14px',
        lineHeight: '14px',
        fontWeight: 700,
        borderRadius: '4px',
        '&:hover': {
          color: 'white',
          bgcolor: '#121212',
          border: '1px solid white',
          width: '343px',
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};

export default StyledButton;
