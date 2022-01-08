import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import FollowItem from '../components/FollowItem';

const Following = () => {
  const emptyArray = Array(10).fill('');
  const [list, setList] = useState([...emptyArray]);

  useEffect(() => {
    fetch(
      'https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10'
    )
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setList(results.data);
      });
  }, []);

  return (
    <Grid container direction="column" rowGap="16px">
      {list.map((item, index) => (
        <Grid item key={index}>
          <FollowItem key={index} {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Following;
