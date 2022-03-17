import { Sidebar } from '../components/sidebar';
import { Conversations } from '../components/conversations';

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <Conversations />
      {/* chat */}
      </div>
    </div>
  )
};
