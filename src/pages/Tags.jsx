import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TagItem from '../components/items/TagItem';
import useMobileQuery from '../hooks/useMobileQuery';

const Tags = () => {
  const emptyArray = Array(5).fill('');
  const [tags, setTags] = useState([...emptyArray]);
  const desktopScreen = !useMobileQuery();

  // load tags info from server
  useEffect(() => {
    // fetch('https://avl-frontend-exam.herokuapp.com/api/tags')
    fetch('/api/users/tags')
      .then((response) => response.json())
      .then((results) => {
        setTags(results);
      });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '846px',
        mt: desktopScreen ? '80px' : '20px',
        mx: 'auto',
        px: desktopScreen ? '25px' : '20px',
      }}
    >
      {/* tags page title */}
      <Typography
        sx={{
          fontSize: desktopScreen ? '30px' : '24px',
          letterSpacing: desktopScreen ? '0.25px' : '0px',
          mb: '23px',
        }}
      >
        Tags
      </Typography>

      {/* tags page responsive content */}
      <Grid
        container
        columnGap="24px"
        rowGap={desktopScreen ? '36px' : '24px'}
        sx={{ px: desktopScreen ? '0px' : '5px' }}
      >
        {tags.map((item, index) => (
          <Grid item key={index}>
            <TagItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tags;
