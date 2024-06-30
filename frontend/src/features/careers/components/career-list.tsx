import styles from "@/features/careers/components/career-list.module.scss";
import { CareerListProps } from "@/features/careers/types";
import CareerItem from "@/features/careers/components/career-item";

export default function CareerList(props: CareerListProps) {
  const { careers } = props;
  return (
    <div className={styles.container}>
      {careers.map((career) => {
        return <CareerItem career={career} key={career.notionKey} />;
      })}
    </div>
  );
}
