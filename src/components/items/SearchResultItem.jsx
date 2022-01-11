import { Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SearchResultItem = ({ avatar, title, username }) => {
  return (
    <Box sx={{ width: '219px' }}>
      {/* image */}
      {avatar ? (
        <Box component="img" sx={styles.image} alt="image" src={avatar} />
      ) : (
        <Skeleton
          sx={{ ...styles.skeleton, ...styles.avatar }}
          variant="rectangular"
        />
      )}

      {/* title */}
      <Typography sx={styles.title}>
        {title ? `${title}` : <Skeleton sx={styles.skeleton} />}
      </Typography>

      {/* username */}
      <Typography sx={styles.username}>
        {username ? `by username` : <Skeleton sx={styles.skeleton} />}
      </Typography>
    </Box>
  );
};

const styles = {
  avatar: {
    width: '219px',
    height: '146px',
  },
  title: {
    fontSize: '15px',
    letterSpacing: '0.14px',
    mt: '7px',
  },
  username: {
    fontSize: '8px',
    lineHeight: '150%',
    mt: '-2px',
    color: '#b2b2b2',
  },
  skeleton: {
    bgcolor: 'gray',
    width: '100%',
    height: '100%',
  },
};

export default SearchResultItem;
