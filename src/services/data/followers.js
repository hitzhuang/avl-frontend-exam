const dummyData = Array(52).fill({
  name: 'Fullname',
  username: 'username',
  avatar: 'avatar8.png',
  isFollowing: false,
});
const followers = [
  {
    name: 'Fullname',
    username: 'username',
    avatar: 'avatar1.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avatar: 'avatar2.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avatar: 'avatar3.png',
    isFollowing: true,
  },
  {
    name: 'Fullname',
    username: 'username',
    avatar: 'avatar4.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avatar: 'avatar5.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avatar: 'avatar6.png',
    isFollowing: true,
  },
  {
    name: 'Fullname',
    username: 'username',
    avatar: 'avatar7.png',
    isFollowing: false,
  },
  ...dummyData,
];

export default followers;
