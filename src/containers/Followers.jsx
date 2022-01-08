import React from 'react';
import { Grid } from '@mui/material';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import FollowItem from '../components/FollowItem';
import useLoadListItems from '../hooks/useLoadListItems';

const Followers = ({ type = 'all', pageSize = 10 }) => {
  const { loading, list, hasNextPage, error, loadMore } = useLoadListItems(
    'https://avl-frontend-exam.herokuapp.com/api/users/',
    type,
    pageSize
  );
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
  });

  return (
    <Grid id="followers" container direction="column" rowGap="16px">
      {list.map((item, index) => (
        <Grid item key={index}>
          <FollowItem key={index} {...item} />
        </Grid>
      ))}
      {hasNextPage && (
        <Grid item ref={sentryRef}>
          <FollowItem />
        </Grid>
      )}
    </Grid>
  );
};

export default Followers;
