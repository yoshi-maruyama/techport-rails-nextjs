import styles from "@/components/header/header.module.scss";
import MailIcon from "../icons/mail";
import { HeaderProps } from "@/components/header/type";
import Link from "next/link";

export default function Header(props: HeaderProps) {
  const { user } = props;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.email}>
            <div className={styles.icon}>
              <MailIcon />
            </div>
            <div>{user.email}</div>
          </div>
        </div>
        <ul className={styles.navBar}>
          <Link href="/">
            <li className={`${styles.navItem} ${styles.active}`}>career</li>
          </Link>
          <li className={styles.navItem}>portfolios</li>
          <Link href="/blogs">
            <li className={styles.navItem}>blogs</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
