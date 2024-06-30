import styles from "@/features/blogs/components/blog-item.module.scss";
import { BlogItemProps } from "@/features/blogs/types";
import Link from "next/link";

export default function BlogItem(props: BlogItemProps) {
  const { blog } = props;
  return (
    <div className={styles.col3}>
      <Link href={`/contents/${blog.notionKey}`}>
        <div className={styles.card}>
          <div className={styles.imgframe}></div>
          <div className={styles.textbox}>
            <div className={styles.title}>{blog.title}</div>
            <div className={styles.summary}>{blog.summary}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
