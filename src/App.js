import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { isMobile } from 'react-device-detect';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';
import Home from './pages/Home';
import Tabs from './pages/Tabs';
import Components from './pages/Components';
import Search from './containers/Search';
import SearchResults from './containers/SearchResults';

import './services/mirage';

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu',
    color: 'white',
  },
});

function App() {
  const matches = useMediaQuery('(max-width:375px)');
  const renderRoutes = (mobileScreen) => (
    <Box
      sx={{
        marginTop: mobileScreen ? '20px' : '55px',
        width: '100%',
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>
        <Route path="tabs" element={<Tabs />} />
        <Route path="components" element={<Components />} />
      </Routes>
    </Box>
  );

  const renderContent = () => {
    /* mobile view */
    if (isMobile || matches) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Navbar mobileScreen={true} />
          {renderRoutes(true)}
        </Box>
      );
    }

    /* desktop view */
    return (
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        {renderRoutes(false)}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      {useLocation().pathname === '/components' ? (
        // special path for components demo
        <Components />
      ) : (
        // normal routes
        renderContent()
      )}
    </ThemeProvider>
  );
}

export default App;
