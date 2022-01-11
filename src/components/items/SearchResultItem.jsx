import { Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SearchResultItem = ({ avatar, title, username, desktopScreen }) => {
  return (
    <Box
      sx={{
        width: desktopScreen ? '219px' : '335px',
      }}
    >
      {/* image */}
      {avatar ? (
        <Box component="img" sx={styles.avatar} alt="image" src={avatar} />
      ) : (
        <Skeleton
          sx={{ ...styles.skeleton, ...styles.avatar }}
          variant="rectangular"
        />
      )}

      {/* title */}
      <Typography
        sx={{ ...styles.title, mt: desktopScreen ? styles.title.mt : '15px' }}
      >
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
    width: '100%',
  },
  title: {
    fontSize: '15px',
    letterSpacing: '0.14px',
    mt: '7px',
  },
  username: {
    fontSize: '8px',
    lineHeight: '150%',
    color: '#b2b2b2',
    mt: '-2px',
  },
  skeleton: {
    bgcolor: 'gray',
    width: '100%',
    height: '100%',
  },
};

export default SearchResultItem;
