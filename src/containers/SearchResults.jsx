import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import useLinkQuery from '../hooks/useLinkQuery';
import useLoadListItems from '../hooks/useLoadListItems';
import SearchResultItem from '../components/items/SearchResultItem';
import BackNavLink from '../components/navlinks/BackNavLink';
import useMobileQuery from '../hooks/useMobileQuery';
import StyledButton from '../components/buttons/StyledButton';

const SearchResults = () => {
  const [keyword, pageSize] = useLinkQuery(['keyword', 'pageSize']);
  const responses = useLoadListItems('search', { pageSize, keyword });
  const { loading, list, hasNextPage, loadMore } = responses;
  const desktopScreen = !useMobileQuery();

  const handleFetching = async () => {
    await loadMore();
  };

  const renderDesktopBackNavbar = () => (
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
  );

  useEffect(() => {
    handleFetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '813px',
        mt: desktopScreen ? '92px' : '20px',
        mx: 'auto',
        px: '20px',
      }}
    >
      {/* desktop back navbar & mobile title only */}
      {desktopScreen ? (
        renderDesktopBackNavbar()
      ) : (
        <Typography
          sx={{
            fontSize: '24px',
            mb: '24px',
          }}
        >
          Results
        </Typography>
      )}

      {/* results list */}
      <Grid
        container
        columnGap="34px"
        sx={{
          px: desktopScreen ? '44px' : '0px',
        }}
      >
        {list.map((item, index) => (
          <Grid
            item
            key={index}
            sx={{
              mb: desktopScreen ? (index / 3 < 1 ? '31px' : '50px') : '40px',
            }}
          >
            <SearchResultItem {...item} desktopScreen={desktopScreen} />
          </Grid>
        ))}
        {loading &&
          Array.from(Array(3)).map((item, index) => (
            <Grid item key={`lr-${index}`}>
              <SearchResultItem desktopScreen={desktopScreen} />
            </Grid>
          ))}
      </Grid>

      {/* infinite loading button */}
      {hasNextPage && !loading && (
        <StyledButton
          sx={{
            mt: '-11px',
            ml: desktopScreen ? '44px' : '0px',
            width: '343px',
          }}
          onClick={handleFetching}
        >
          MORE
        </StyledButton>
      )}
    </Box>
  );
};

export default SearchResults;
