import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../components/TabPanel';
import Followers from './Followers';

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChanged = (e, tab) => setTabIndex(tab);

  return (
    <Box sx={{ width: '375px', marginTop: '17px' }}>
      <AppBar position="static" elevation={0}>
        <Tabs
          sx={styles.tabs}
          aria-label="flowers and following tabs"
          variant="fullWidth"
          value={tabIndex}
          onChange={handleTabChanged}
        >
          <Tab label="Followers" sx={styles.tab} />
          <Tab label="Following" sx={styles.tab} />
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <Followers type="all" />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Followers type="friends" />
      </TabPanel>
    </Box>
  );
};

const styles = {
  tabs: {
    backgroundColor: '#181818',
    '& .MuiTabs-indicator': {
      backgroundColor: 'white',
    },
  },
  tab: {
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
  },
};

export default Profile;
