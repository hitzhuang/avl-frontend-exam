import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import StyledButton from '../components/buttons/StyledButton';
import StyledInput from '../components/StyledInput';
import StyledSlider from '../components/StyledSlider';

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

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.label}>Search</Typography>
      <StyledInput fullWidth value={keyword} onChange={handleKeywordChanged} />
      <SearchDivider />

      {/* display for # of results per page */}
      <Typography sx={{ ...styles.label, mb: '8px' }}>
        # Of Results Per Page
      </Typography>
      <Box sx={{ display: 'flex', mb: '2px' }}>
        <Typography sx={styles.numberOfResults}>{pageSize}</Typography>
        <Typography sx={styles.labelResults}>results</Typography>
      </Box>

      {/* slider for # of results per page */}
      <StyledSlider
        aria-label="page size slider"
        defaultValue={defaultPageSize}
        sx={{ maxWidth: '734px' }}
        min={3}
        max={50}
        handleValueChanged={handleSliderChanged}
      />
      <SearchDivider sx={{ mt: '34px' }} />

      {/* search action button */}
      <Link to={`search?pageSize=${pageSize}&keyword=${keyword}`}>
        <StyledButton sx={styles.searchButton}>SEARCH</StyledButton>
      </Link>
    </Box>
  );
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '725px',
    mt: '54px',
    mx: 'auto',
    padding: '0px 20px',
  },
  label: {
    fontSize: '24px',
    lineHeight: '36px',
    marginBottom: '19px',
  },
  numberOfResults: { fontWeight: 700, fontSize: '48px', lineHeight: '72px' },
  resultsLabel: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    marginLeft: '10px',
    marginTop: '33px',
  },
  searchButton: {
    width: '343px',
    marginTop: '304px',
    marginBottom: '0px',
  },
};

export default Search;
