import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import useLinkQuery from '../hooks/useLinkQuery';
import useLoadListItems from '../hooks/useLoadListItems';
import SearchResultItem from '../components/items/SearchResultItem';
import BackNavLink from '../components/navlinks/BackNavLink';
import useMobileQuery from '../hooks/useMobileQuery';
import StyledButton from '../components/buttons/StyledButton';

const SearchResults = () => {
  const desktopScreen = !useMobileQuery();
  const [keyword, pageSize] = useLinkQuery(['keyword', 'pageSize']);
  const responses = useLoadListItems('search', { pageSize, keyword });
  const { loading, list, hasNextPage, loadMore } = responses;

  const handleFetching = async () => {
    await loadMore();
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
              ml: '26px',
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
            <SearchResultItem {...item} />
          </Grid>
        ))}
        {loading &&
          Array.from(Array(3)).map((item, index) => (
            <Grid item key={index}>
              <SearchResultItem />
            </Grid>
          ))}
      </Grid>
      {hasNextPage && !loading && (
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
