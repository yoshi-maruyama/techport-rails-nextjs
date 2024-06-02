import styles from "@/features/careers/components/career-list.module.scss";

export default function CareerList() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <div className={styles.content}>
          <div className={styles.title}>Career 1</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <div className={styles.content}>
          <div className={styles.title}>Career 2</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <div className={styles.content}>
          <div className={styles.title}>Career 3</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
