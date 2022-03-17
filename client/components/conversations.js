import Image from 'next/image';
import { useState } from 'react';

import friends from '../assets/icons/friends.svg';
import nitro from '../assets/icons/nitro.svg';
import avatar1 from "../assets/images/avatar-1.webp";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.webp";
import avatar4 from "../assets/images/avatar-4.webp";

import styles from '../styles/conversations.module.css';

const dummyDms = [
  { id: 1, name: 'Qazi', avatar: avatar1},
  { id: 2, name: 'David', avatar: avatar2},
  { id: 3, name: 'Anna', avatar: avatar3},
  { id: 4, name: 'Frankie', avatar: avatar4},
];

const Conversations = () => {
  const [dms, setDms] = useState(dummyDms);

  const hasDms = dms.map(({ id, ...restProps }) => {
    return <div key={id}>dms</div>;
  });

  return (
    <div className={styles.conversations}>
      <div className={styles.conversationsTop}>
        <input type="search" placeholder="Find or start a conversation"/>
      </div>
      <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image className={styles.svg} alt="friends" src={friends} width={25} height={25} />
          </div>
          <p>Friends</p>
        </div>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image className={styles.svg} alt="nitro" src={nitro} width={25} height={25} />
          </div>
          <p>Nitro</p>
        </div>
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        {hasDms}
      </div>
    </div>
  );
};

export { Conversations };
