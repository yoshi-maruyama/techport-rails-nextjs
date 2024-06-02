import styles from "@/components/header/header.module.scss";
import MailIcon from "../icons/mail";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.userName}>User Name</div>
          <div className={styles.email}>
            <div className={styles.icon}>
              <MailIcon />
            </div>
            <div>user-mail@mail.com</div>
          </div>
        </div>
        <ul className={styles.navBar}>
          <li className={`${styles.navItem} ${styles.active}`}>career</li>
          <li className={styles.navItem}>portfolios</li>
          <li className={styles.navItem}>blogs</li>
        </ul>
      </div>
    </header>
  );
}
