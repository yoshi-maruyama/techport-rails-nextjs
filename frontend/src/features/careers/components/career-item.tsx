import styles from "@/features/careers/components/career-item.module.scss";
import { CareerItemProps } from "@/features/careers/types";

export default function CareerItem(props: CareerItemProps) {
  const { career } = props;
  return (
    <div className={styles.item} key={career.id}>
      <div className={styles.icon}></div>
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.title}>{career.title}</div>
          <div className={styles.period}>
            {career.startedAt} ~ {career.endedAt}
          </div>
        </div>
        <div className={styles.description}>{career.description}</div>
      </div>
    </div>
  );
}
