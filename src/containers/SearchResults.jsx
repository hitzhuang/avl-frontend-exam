import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import useLinkQuery from '../hooks/useLinkQuery';
import useLoadListItems from '../hooks/useLoadListItems';
import SearchResultItem from '../components/items/SearchResultItem';
import BackNavLink from '../components/navlinks/BackNavLink';
import useMobileQuery from '../hooks/useMobileQuery';
import StyledButton from '../components/buttons/StyledButton';

const SearchResults = () => {
  const desktopScreen = !useMobileQuery();
  const [keyword, pageSize] = useLinkQuery(['keyword', 'pageSize']);
  const responses = useLoadListItems('all', { pageSize, keyword });
  const { loading, list, hasNextPage, error, loadMore } = responses;
  const [enableNext, setEnableNext] = useState(false);

  const handleFetching = () => {
    loadMore().finally(() => {
      console.log(hasNextPage);
      if (hasNextPage) {
        setEnableNext(true);
      } else {
        setEnableNext(false);
      }
    });
  };

  useEffect(() => {
    handleFetching();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '813px',
        mx: 'auto',
        mt: '92px',
      }}
    >
      {/* desktop back navlink */}
      {desktopScreen && (
        <Container disableGutters sx={{ mb: '24px' }}>
          <BackNavLink
            sx={{
              fontSize: '30px',
              lineHeight: '45px',
              letterSpacing: '0.25px',
              color: 'white',
              ml: '25px',
              mt: '1px',
            }}
          >
            Results
          </BackNavLink>
        </Container>
      )}

      {/* results list */}
      <Grid
        container
        columnGap="34px"
        sx={{
          display: 'flex',
          mx: 'auto',
          px: '44px',
        }}
      >
        {list.map((item, index) => (
          <Grid
            item
            key={index}
            sx={index / 3 < 1 ? { mb: '32px' } : { mb: '50px' }}
          >
            <SearchResultItem {...item} title="This is a title" />
          </Grid>
        ))}
        {loading &&
          Array.from(Array(3)).map((item, index) => (
            <Grid item key={index}>
              <SearchResultItem />
            </Grid>
          ))}
      </Grid>
      {enableNext && (
        <StyledButton
          sx={{ mt: '-12px', ml: '44px', width: '343px' }}
          onClick={handleFetching}
        >
          MORE
        </StyledButton>
      )}
    </Box>
  );
};

export default SearchResults;
