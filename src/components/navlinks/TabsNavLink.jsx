import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import { BadgeUnstyled, Typography } from '@mui/material';
import StyledBadge from '../StyledBadge';
import Icon from '../../assets/clone.svg';
import InactiveIcon from '../../assets/clone-gray-out.svg';

const TabsNavLink = ({ sx }) => {
  const active = useLocation().pathname === '/tabs';
  return (
    <Link to="/tabs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...sx,
        }}
      >
        {/* icon */}
        <BadgeUnstyled variant="dot" component={active ? '' : StyledBadge}>
          <img
            src={active ? Icon : InactiveIcon}
            alt="tabs nav icon"
            width={24}
            height={24}
          />
        </BadgeUnstyled>

        {/* nav name */}
        <Typography
          sx={{
            fontSize: '12px',
            lineHeight: '18px',
            letterSpacing: '0.4px',
            color: 'white',
          }}
        >
          {active ? 'Tabs' : ''}
        </Typography>
      </Box>
    </Link>
  );
};

export default TabsNavLink;
