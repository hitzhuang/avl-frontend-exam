import React from 'react';
import { Grid } from '@mui/material';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import FollowItem from '../components/items/FollowItem';
import useLoadListItems from '../hooks/useLoadListItems';

const Followers = ({ type = 'all', pageSize = 10 }) => {
  const responses = useLoadListItems(type, { pageSize });
  const { loading, list, hasNextPage, error, loadMore } = responses;
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
  });

  return (
    <Grid container direction="column" rowGap="16px">
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
