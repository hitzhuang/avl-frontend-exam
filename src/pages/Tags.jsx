import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TagItem from '../components/items/TagItem';

const Tags = () => {
  const emptyArray = Array(5).fill('');
  const [tags, setTags] = useState([...emptyArray]);

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
        minWidth: '375px',
        maxWidth: '846px',
        mt: '81px',
        mx: 'auto',
      }}
    >
      {/* tags page title */}
      <Typography
        sx={{
          fontSize: '30px',
          lineHeight: '45px',
          letterSpacing: '0.25px',
          mb: '23px',
        }}
      >
        Tags
      </Typography>

      {/* tags page responsive content */}
      <Grid container rowGap="36px" columnGap="24px">
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
