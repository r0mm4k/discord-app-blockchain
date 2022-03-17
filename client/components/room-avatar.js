import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/room-avatar.module.css';

const RoomAvatar = ({ id, avatar, name }) => {
  const router = useRouter();

  const changeUrl = () => router.push(`?channel=${id}&name=${name}`);

  return (
    <div className={styles.wrapper} onClick={changeUrl}>
      <div className={styles.roomAvatar}>
        <Image
          className={styles.roomAvatarImage}
          src={avatar}
          height={48}
          width={48}
          alt={name}
        />
      </div>
    </div>
  );
};

export { RoomAvatar };
