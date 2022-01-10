import React from 'react';
import { Box } from '@mui/system';
import { Paper, Skeleton, Typography } from '@mui/material';

const TagItem = ({ name, count, type }) => {
  return (
    <Box sx={{ width: '150px' }}>
      {/* header */}
      {name ? (
        <Box sx={styles.header.root}>
          <Paper sx={styles.header.bg} />
          <Typography sx={styles.header.name}>{name}</Typography>
        </Box>
      ) : (
        <Skeleton sx={{ ...styles.header.root, ...styles.skeleton }} />
      )}

      {/* body content */}
      <Typography sx={styles.body.name}>
        {name ? name : <Skeleton sx={styles.skeleton} />}
      </Typography>
      <Typography sx={styles.body.content}>
        {count ? `${count} ${type}` : <Skeleton sx={styles.skeleton} />}
      </Typography>
    </Box>
  );
};

const styles = {
  header: {
    root: { position: 'relative', width: '100%', height: '150px' },
    bg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      backgroundColor: 'white',
      opacity: '0.06',
      color: 'white',
    },
    name: {
      position: 'absolute',
      bottom: '14px',
      left: '10px',
      maxWidth: '107px',
      borderRadius: '8px',
      border: '4px solid white',
      padding: '3px 10px',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '36px',
      letterSpacing: 0.01,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  body: {
    name: {
      fontSize: '15px',
      letterSpacing: '0.14px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      mt: '10px',
    },
    content: {
      fontSize: '11px',
      color: '#b2b2b2',
      mt: '-1px',
    },
  },
  skeleton: {
    bgcolor: 'gray',
  },
};

export default TagItem;
