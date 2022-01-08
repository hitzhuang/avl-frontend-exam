import React from 'react';
import { Box } from '@mui/system';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ margin: '32px 16px 0px 16px' }}>{children}</Box>
      )}
    </Box>
  );
};

export default TabPanel;
