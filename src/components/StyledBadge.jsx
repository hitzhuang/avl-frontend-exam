import { styled } from '@mui/system';
import { BadgeUnstyled } from '@mui/material';

const StyledBadge = styled(BadgeUnstyled)`
  position: relative;
  display: inline-block;

  & .MuiBadge-dot {
    padding: 0;
    z-index: auto;
    min-width: 5px;
    width: 5px;
    height: 5px;
    background: #00d1ff;
    border-radius: 100%;
    box-shadow: 0 0 0 0px #00d1ff;
  }

  & .MuiBadge-anchorOriginTopRight {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;

export default StyledBadge;
