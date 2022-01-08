import React from 'react';
import { Box, Typography } from '@mui/material';
import ComponentGroupTitle from '../components/ComponentGroupTitle';
import ComponentStatusTitle from '../components/ComponentStatusTitle';
import ComponentTypeTitle from '../components/ComponentTypeTitle';
import StyledButton from '../components/buttons/StyledButton';
import StyledButtonHovered from '../components/buttons/StyledButtonHovered';
import ContainedButton from '../components/buttons/ContainedButton';
import ContainedButtonHovered from '../components/buttons/ContainedButtonHovered';
import OutlinedButton from '../components/buttons/OutlinedButton';
import OutlinedButtonHovered from '../components/buttons/OutlinedButtonHovered';
import StyledInput from '../components/StyledInput';
import StyledInputFocused from '../components/StyledInputFocused';
import StyledSlider from '../components/StyledSlider';

const Components = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '68px' }}>
      {/* Component */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: '45px',
          letterSpacing: '0.25px',
          marginTop: '89px',
        }}
      >
        Component
      </Typography>

      {/* Buttons */}
      {/* regular buttons */}
      <Box sx={{ marginTop: '89px' }}>
        <ComponentGroupTitle text="Button" />
        <Box sx={{ display: 'flex', marginTop: '36px' }}>
          {/* NORMAL */}
          <Box>
            <ComponentStatusTitle text="NORMAL" sx={{ marginBottom: '13px' }} />
            <StyledButton>BUTTON</StyledButton>
          </Box>
          {/* HOVER */}
          <Box sx={{ marginLeft: '41px' }}>
            <ComponentStatusTitle text="HOVER" sx={{ marginBottom: '13px' }} />
            <StyledButtonHovered>BUTTON</StyledButtonHovered>
          </Box>
        </Box>
      </Box>

      {/* Outlined buttons */}
      <Box sx={{ display: 'flex', marginTop: '80px' }}>
        <ComponentTypeTitle text="Outlined" sx={{ marginTop: '29px' }} />
        {/* NORMAL */}
        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginLeft: '51px' }}
        >
          <ComponentStatusTitle text="NORMAL" />
          <OutlinedButton
            sx={{ marginTop: '12px', marginLeft: '-2px', width: '60px' }}
          >
            Button
          </OutlinedButton>
        </Box>
        {/* HOVER */}
        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginLeft: '57px' }}
        >
          <ComponentStatusTitle text="HOVER" />
          <OutlinedButtonHovered sx={{ marginTop: '11px', width: '58px' }}>
            Button
          </OutlinedButtonHovered>
        </Box>
      </Box>

      {/* Contained buttons */}
      <Box sx={{ display: 'flex', marginTop: '25px' }}>
        <ComponentTypeTitle text="Contained" sx={{ marginTop: '27px' }} />
        {/* NORMAL */}
        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginLeft: '41px' }}
        >
          <ComponentStatusTitle text="NORMAL" />
          <ContainedButton
            sx={{ marginTop: '13px', height: '25px', width: '52px' }}
          >
            Button
          </ContainedButton>
        </Box>
        {/* HOVER */}
        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginLeft: '57px' }}
        >
          <ComponentStatusTitle text="HOVER" />
          <ContainedButtonHovered
            sx={{ marginTop: '10px', height: '27px', width: '60px' }}
          >
            Button
          </ContainedButtonHovered>
        </Box>
      </Box>

      {/* Input */}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '109px' }}
      >
        <ComponentGroupTitle text="Input" />
        {/* NORMAL */}
        <Box sx={{ marginTop: '36px', marginLeft: '-1px' }}>
          <ComponentStatusTitle text="NORMAL" />
          <StyledInput sx={{ marginTop: '8px', width: '725px' }} />
        </Box>
        {/* FOCUSED */}
        <Box sx={{ marginTop: '48px', marginLeft: '-1px' }}>
          <ComponentStatusTitle text="FOCUSED" />
          <StyledInputFocused
            defaultValue="Key"
            sx={{ marginTop: '8px', width: '704px' }}
          />
        </Box>
      </Box>

      {/* Slider */}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '138px' }}
      >
        <ComponentGroupTitle text="Slider" />
        <StyledSlider
          aria-label="gradient slider"
          defaultValue={38.5}
          min={3}
          max={50}
          sx={{ marginTop: '22px', marginLeft: '1px', width: '733px' }}
        />
        <StyledSlider
          aria-label="gradient slider"
          defaultValue={50}
          min={3}
          max={50}
          sx={{ marginTop: '32px', marginLeft: '1px', width: '733px' }}
        />
      </Box>
    </Box>
  );
};

export default Components;
