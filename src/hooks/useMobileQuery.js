import { useMediaQuery } from '@mui/material';
import { isMobile } from 'react-device-detect';

const useMobileQuery = () => {
  const matches = useMediaQuery('(max-width:375px)');
  return isMobile || matches;
};

export default useMobileQuery;
