import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { isMobile } from 'react-device-detect';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';
import Home from './pages/Home';
import Tabs from './pages/Tabs';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Ubuntu',
      color: 'white',
    },
  });
  const matches = useMediaQuery('(max-width:375px)');
  const renderRoutes = (mobileScreen) => (
    <Box
      sx={{
        marginTop: mobileScreen ? '20px' : '54px',
        marginLeft: mobileScreen ? '20px' : 'auto',
        marginRight: 'auto',
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tabs" element={<Tabs />} />
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

  return <ThemeProvider theme={theme}>{renderContent()}</ThemeProvider>;
}

export default App;
