const dummyData = Array(52).fill({
  name: 'Fullname',
  username: 'username',
  avater: '/avatar8.png',
  isFollowing: false,
});
const followers = [
  {
    name: 'Fullname',
    username: 'username',
    avater: '/avatar1.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avater: '/avatar2.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avater: '/avatar3.png',
    isFollowing: true,
  },
  {
    name: 'Fullname',
    username: 'username',
    avater: '/avatar4.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avater: '/avatar5.png',
    isFollowing: false,
  },
  {
    name: 'Fullname',
    username: 'username',
    avater: '/avatar6.png',
    isFollowing: true,
  },
  {
    name: 'Fullname',
    username: 'username',
    avater: '/avatar7.png',
    isFollowing: false,
  },
  ...dummyData,
];

export default followers;
