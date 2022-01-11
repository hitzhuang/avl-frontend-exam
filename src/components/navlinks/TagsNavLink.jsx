import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import { BadgeUnstyled, Typography } from '@mui/material';
import StyledBadge from '../StyledBadge';
import Icon from '../../assets/clone.svg';
import InactiveIcon from '../../assets/clone-gray-out.svg';

const TabsNavLink = ({ sx, showLabel = true }) => {
  const active = useLocation().pathname === '/tags';
  const renderIcon = () => (
    <Box
      component="img"
      alt="tags nav icon"
      width={24}
      height={24}
      src={active ? Icon : InactiveIcon}
      mt={showLabel ? '18px' : '0px'}
    />
  );
  const renderIconWithBadge = () =>
    showLabel ? (
      <BadgeUnstyled variant="dot" component={StyledBadge}>
        <Box
          component="img"
          alt="tags nav icon"
          width={24}
          height={24}
          src={InactiveIcon}
        />
      </BadgeUnstyled>
    ) : (
      renderIcon()
    );

  return (
    <Link to="/tags">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...sx,
        }}
      >
        {/* icon */}
        {active ? renderIcon() : renderIconWithBadge()}

        {/* nav name */}
        {showLabel && (
          <Typography
            sx={{
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.4px',
              color: 'white',
              mt: '1px',
              ml: '1px',
            }}
          >
            {active ? 'Tags' : ''}
          </Typography>
        )}
      </Box>
    </Link>
  );
};

export default TabsNavLink;
