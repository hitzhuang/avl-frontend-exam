import React from 'react';
import { Input } from '@mui/material';

const StyledInput = (props) => {
  return (
    <Input
      placeholder="Keyword"
      disableUnderline={true}
      {...props}
      sx={{
        color: 'white',
        fontFamily: 'Ubuntu',
        letterSpacing: '0.25px',
        '& .MuiInputBase-input': {
          minHeight: '60px',
          position: 'relative',
          backgroundColor: '',
          borderRadius: '6px',
          border: '3px solid rgba(255,255,255,0.5)',
          boxSizing: 'border-box',
          fontSize: '14px',
          padding: '2px 0px 0px 15px',
          '&:focus': {
            borderColor: '#ff9b33',
            boxShadow: 'none',
          },
        },
        ...props.sx,
      }}
    />
  );
};

export default StyledInput;
