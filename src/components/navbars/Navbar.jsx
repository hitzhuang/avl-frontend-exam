import React from 'react';
import MobileNavbar from './MobileNavbar';
import DestopNavbar from './DestopNavbar';

const Navbar = ({ mobileScreen = false }) =>
  mobileScreen ? <MobileNavbar /> : <DestopNavbar />;

export default Navbar;
