import { useRouter } from 'next/router';
import { useState } from 'react';

import { RoomAvatar } from './room-avatar';

import avatar1 from '../assets/images/avatar-1.webp';
import avatar2 from '../assets/images/avatar-2.png';
import avatar3 from '../assets/images/avatar-3.webp';
import avatar4 from '../assets/images/avatar-4.webp';

import styles from '../styles/sidebar.module.css';

const dummyChannels = [
  { id: 1, name: 'general', avatar: avatar1},
  { id: 2, name: 'random', avatar: avatar2},
  { id: 3, name: 'chill', avatar: avatar3},
  { id: 4, name: 'build_space', avatar: avatar4},
];

const Sidebar = () => {
  const router = useRouter();
  const [channels, setChannels] = useState(dummyChannels);

  const hasChannels = channels.map(({ id, ...restProps }) => {
    return <RoomAvatar key={id} id={id} {...restProps} />;
  });

  return <div className={styles.wrapper}>{hasChannels}</div>;
};

export { Sidebar };
