import { PortfolioItemProps } from "@/features/portfolios/types";
import styles from "@/features/blogs/components/blog-item.module.scss";
import Link from "next/link";

export default function PortfolioItem(props: PortfolioItemProps) {
  const { portfolio } = props;
  return (
    <div className={styles.col3}>
      <Link href={`/contents/${portfolio.notionKey}`}>
        <div className={styles.card}>
          <div className={styles.imgframe}></div>
          <div className={styles.textbox}>
            <div className={styles.title}>{portfolio.title}</div>
            <div className={styles.summary}>{portfolio.summary}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
