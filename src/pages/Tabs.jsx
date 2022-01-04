import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import TagItem from '../components/TagItem';

const Tabs = () => {
  const [tags, setTags] = useState([]);

  // load tags info from server
  useEffect(() => {
    fetch('https://avl-frontend-exam.herokuapp.com/api/tags')
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
        }}
      >
        {/* tags page title */}
        <PageTitle title="Tags" />

        {/* tags page responsive content */}
        <Grid container direction="row" columnGap="24px" rowGap="36px">
          {tags.map(({ id, name, count }) => (
            <Grid item key={id}>
              <TagItem name={name} count={count} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Tabs;
