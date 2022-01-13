import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import StyledButton from '../components/buttons/StyledButton';
import StyledInput from '../components/StyledInput';
import StyledSlider from '../components/StyledSlider';
import useMobileQuery from '../hooks/useMobileQuery';
import BottomNavbar from '../components/navbars/BottomNavbar';

const SearchDivider = ({ sx }) => (
  <Divider
    style={{
      width: '100%',
      margin: '29px auto 31px auto',
      background: 'white',
      opacity: '0.1',
      ...sx,
    }}
  />
);

const Search = () => {
  const defaultPageSize = 30;
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const handleKeywordChanged = (e) => setKeyword(e.target.value);
  const handleSliderChanged = (e, data) => setPageSize(data);
  const desktopScreen = !useMobileQuery();

  const NumberOfResultsPerPage = () => (
    <>
      <Typography
        sx={{
          fontSize: '24px',
          lineHeight: '36px',
          mt: desktopScreen ? '0px' : '29px',
          mb: desktopScreen ? '8px' : '4px',
        }}
      >
        # Of Results Per Page
      </Typography>
      <Box sx={{ display: 'flex', mb: '2px' }}>
        <Typography sx={styles.numberOfResults}>{pageSize}</Typography>
        <Typography sx={styles.resultsLabel}>results</Typography>
      </Box>
    </>
  );

  const SearchButton = () => (
    <Link to={`search?pageSize=${pageSize}&keyword=${keyword}`}>
      <StyledButton
        sx={{
          width: desktopScreen ? '343px' : '100%',
          mt: desktopScreen ? '304px' : '49px',
        }}
      >
        SEARCH
      </StyledButton>
    </Link>
  );

  return (
    <Box sx={{ width: '100%', px: desktopScreen ? '0px' : '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '725px',
          mx: 'auto',
          mt: desktopScreen ? '55px' : '0px',
        }}
      >
        {/* search input */}
        <Box>
          <Typography
            sx={{
              fontSize: '24px',
              lineHeight: '36px',
              mb: desktopScreen ? '19px' : '15px',
            }}
          >
            Search
          </Typography>
          <StyledInput
            fullWidth
            value={keyword}
            onChange={handleKeywordChanged}
          />
        </Box>
        {desktopScreen && <SearchDivider />}

        {/* display for # of results per page */}
        <NumberOfResultsPerPage />

        {/* slider for # of results per page */}
        {/* <SearchSlider /> */}
        <StyledSlider
          aria-label="page size slider"
          defaultValue={defaultPageSize}
          desktopScreen={desktopScreen}
          sx={{
            maxWidth: '734px',
            width: '100%',
            mt: desktopScreen ? '0px' : '-7px',
          }}
          min={3}
          max={50}
          handleValueChanged={handleSliderChanged}
        />
        <SearchDivider sx={{ marginTop: desktopScreen ? '34px' : '215px' }} />

        {/* search action button */}
        <SearchButton />
      </Box>
      {desktopScreen !== true && <BottomNavbar />}
    </Box>
  );
};

const styles = {
  numberOfResults: { fontWeight: 700, fontSize: '48px', lineHeight: '72px' },
  resultsLabel: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    marginLeft: '10px',
    marginTop: '33px',
  },
};

export default Search;
