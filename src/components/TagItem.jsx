import React from 'react';
import { Box } from '@mui/system';
import { Paper, Skeleton, Typography } from '@mui/material';

const TagItem = ({ name, count, type }) => {
  return (
    <Box sx={{ width: '150px' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '150px' }}>
        <Paper
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            backgroundColor: 'white',
            opacity: '0.06',
            color: 'white',
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            bottom: '14px',
            left: '10px',
            width: '94px',
            borderRadius: '8px',
            border: '4px solid white',
            padding: '7px 14px',
            fontSize: '24px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name ? name : <Skeleton sx={{ bgcolor: 'gray' }} />}
        </Typography>
      </Box>
      <Typography
        mt="7px"
        sx={{
          fontSize: '14.9px',
          lineHeight: '22.35px',
          letterSpacing: '0.14px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {name ? name : <Skeleton sx={{ bgcolor: 'gray' }} />}
      </Typography>
      <Typography
        sx={{
          fontSize: '11.17px',
          lineHeight: '16.76px',
          letterSpacing: '0.37px',
          color: '#b2b2b2',
        }}
      >
        {count ? `${count} ${type}` : <Skeleton sx={{ bgcolor: 'gray' }} />}
      </Typography>
    </Box>
  );
};

export default TagItem;
