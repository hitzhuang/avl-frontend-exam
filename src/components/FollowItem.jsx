import React from 'react';
import { Box } from '@mui/system';
import { Avatar, Skeleton, Typography } from '@mui/material';
import ContainedButton from './buttons/ContainedButton';
import OutlinedButton from './buttons/OutlinedButton';

const FollowButton = ({ isFollowing }) =>
  isFollowing ? (
    <ContainedButton sx={{ height: '28px', width: '76px' }}>
      Following
    </ContainedButton>
  ) : (
    <OutlinedButton sx={{ width: '60px' }}>Follow</OutlinedButton>
  );

const FollowItem = ({ avater, isFollowing, name, username }) => {
  return (
    <Box sx={styles.root}>
      <Box sx={{ display: 'flex' }}>
        {/* Avatar */}
        {avater ? (
          <Avatar sx={styles.avatar} src={avater} variant="square" />
        ) : (
          <Skeleton sx={styles.avatarSkeleton} variant="circle" />
        )}

        {/* Name & Username  */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* name */}
          <Typography sx={styles.name}>
            {name ? name : <Skeleton sx={styles.nameSkeleton} />}
          </Typography>

          {/* username */}
          <Typography sx={styles.username}>
            {username ? (
              `@${username}`
            ) : (
              <Skeleton sx={styles.usernameSkeleton} />
            )}
          </Typography>
        </Box>
      </Box>

      {/* follow & following button */}
      {isFollowing !== undefined ? (
        <FollowButton isFollowing={isFollowing} />
      ) : (
        <Skeleton sx={styles.followSkeleton} variant="circle" />
      )}
    </Box>
  );
};

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    borderRadius: '5px',
    border: '1px solid white',
    margin: '3px 15px 2px 0px',
    boxSizing: 'border-box',
    width: '40px',
    height: '40px',
  },
  avatarSkeleton: {
    bgcolor: 'gray',
    borderRadius: '5px',
    border: '1px solid gray',
    margin: '3px 15px 2px 0px',
    boxSizing: 'border-box',
    width: '40px',
    height: '40px',
  },
  name: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  nameSkeleton: { bgcolor: 'gray', width: '70px', height: '21px' },
  username: {
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.25px',
    opacity: '0.5',
  },
  usernameSkeleton: { bgcolor: 'gray', width: '140px', height: '21px' },
  followSkeleton: {
    bgcolor: 'gray',
    height: '29px',
    width: '60px',
    borderRadius: '20px',
  },
};

export default FollowItem;
