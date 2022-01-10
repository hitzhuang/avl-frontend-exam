import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { Routes, Route, useLocation } from 'react-router-dom';
import useMobileQuery from './hooks/useMobileQuery';
import Navbar from './components/navbars/Navbar';
import Home from './pages/Home';
import Tabs from './pages/Tabs';
import Components from './pages/Components';
import Search from './containers/Search';
import SearchResults from './containers/SearchResults';

// import './services/mirage';

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu',
    color: 'white',
  },
});

function App() {
  const mobileScreen = useMobileQuery();
  const renderRoutes = () => (
    <Box sx={{ width: '100%' }}>
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
    return (
      <Box
        sx={mobileScreen ? styles.container.mobile : styles.container.desktop}
      >
        <Navbar mobileScreen={mobileScreen} />
        {renderRoutes()}
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

const styles = {
  container: {
    desktop: { display: 'flex' },
    mobile: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
  },
};

export default App;
