import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import StyledButton from '../components/buttons/StyledButton';
import StyledInput from '../components/StyledInput';
import StyledSlider from '../components/StyledSlider';
import { Link } from 'react-router-dom';

const defaultPageSize = 30;
const titleStyles = {
  fontSize: '24px',
  lineHeight: '36px',
  marginBottom: '19px',
};

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
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const handleKeywordChanged = (e) => setKeyword(e.target.value);
  const handleSliderChanged = (e, data) => setPageSize(data);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '725px',
        margin: '0px auto',
        padding: '0px 20px',
      }}
    >
      <Typography sx={titleStyles}>Search</Typography>
      <StyledInput fullWidth value={keyword} onChange={handleKeywordChanged} />
      <SearchDivider />
      <Typography sx={{ ...titleStyles, marginBottom: '8px' }}>
        # Of Results Per Page
      </Typography>
      <Box sx={{ display: 'flex', marginBottom: '2px' }}>
        <Typography
          sx={{ fontWeight: 700, fontSize: '48px', lineHeight: '72px' }}
        >
          {pageSize}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
            marginLeft: '10px',
            marginTop: '33px',
          }}
        >
          results
        </Typography>
      </Box>
      <StyledSlider
        aria-label="page size slider"
        defaultValue={defaultPageSize}
        min={3}
        max={50}
        sx={{ maxWidth: '734px' }}
        handleValueChanged={handleSliderChanged}
      />
      <SearchDivider sx={{ marginTop: '34px' }} />
      <Link to={`search?pageSize=${pageSize}&keyword=${keyword}`}>
        <StyledButton
          sx={{
            width: '343px',
            marginTop: '304px',
            marginBottom: '0px',
          }}
        >
          SEARCH
        </StyledButton>
      </Link>
    </Box>
  );
};

export default Search;
