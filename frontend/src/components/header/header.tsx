import styles from "@/components/header/header.module.scss";
import MailIcon from "../icons/mail";
import { HeaderProps } from "@/components/header/type";
import Navbar from "../navbars/navbar";

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
        <Navbar />
      </div>
    </header>
  );
}
