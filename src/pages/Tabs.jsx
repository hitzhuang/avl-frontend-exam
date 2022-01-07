import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TagItem from '../components/TagItem';

const Tabs = () => {
  const emptyAs = Array(10).fill('');
  const [tags, setTags] = useState([...emptyAs]);

  // load tags info from server
  useEffect(() => {
    // fetch('https://avl-frontend-exam.herokuapp.com/api/tags')
    fetch('/api/tags')
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setTags(results);
      });
  }, []);

  return (
    <Container sx={{ paddingLeft: 0 }}>
      <Box
        sx={{
          minWidth: '375px',
          maxWidth: '846px',
          margin: '0px auto',
        }}
      >
        {/* tags page title */}
        <Typography
          sx={{
            fontSize: '30px',
            lineHeight: '45px',
            letterSpacing: '0.25px',
            marginBottom: '24px',
          }}
        >
          Tags
        </Typography>

        {/* tags page responsive content */}
        <Grid container direction="row" columnGap="24px" rowGap="36px">
          {tags.map((item, index) => (
            <Grid item key={index}>
              <TagItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Tabs;
