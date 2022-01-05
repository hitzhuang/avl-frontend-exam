import React from 'react';
import { Input } from '@mui/material';

const StyledInputFocused = (props) => {
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
          minHeight: '52px',
          borderRadius: '6px',
          position: 'relative',
          backgroundColor: '',
          border: '3px solid rgba(255,255,255,0.5)',
          fontSize: '14px',
          padding: '2px 0px 0px 15px',
          borderColor: '#ff9b33',
          boxShadow: 'none',
          ...props.sx,
        },
      }}
    />
  );
};

export default StyledInputFocused;
