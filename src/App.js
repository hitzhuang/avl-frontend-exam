import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { isMobile } from 'react-device-detect';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tabs from './pages/Tabs';

function App() {
  const matches = useMediaQuery('(max-width:375px)');
  const renderRoutes = () => (
    <Box sx={{ width: '100%' }}>
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
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar mobileScreen={true} />
          {renderRoutes()}
        </Box>
      );
    }
    /* desktop view */
    return (
      <Box sx={{ display: 'flex' }}>
        <Navbar mobileScreen={false} />
        {renderRoutes()}
      </Box>
    );
  };

  return renderContent();
}

export default App;
