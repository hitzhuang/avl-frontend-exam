import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../components/TabPanel';
import Followers from './Followers';
import Following from './Following';

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChanged = (e, tab) => setTabIndex(tab);

  return (
    <Box sx={{ width: '375px', marginTop: '-38px' }}>
      <AppBar position="static" elevation={0}>
        <Tabs
          variant="fullWidth"
          value={tabIndex}
          onChange={handleTabChanged}
          aria-label="flowers and following tabs"
          sx={{
            backgroundColor: '#181818',
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
          }}
        >
          <Tab label="Followers" sx={tabStyle} />
          <Tab label="Following" sx={tabStyle} />
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <Followers />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Followers type="friends" />
      </TabPanel>
    </Box>
  );
};

const tabStyle = {
  color: '#929292',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.15px',
  paddingBottom: '7px',
  '&.Mui-selected': {
    color: 'white',
    fontWeight: 700,
  },
};

export default Profile;
