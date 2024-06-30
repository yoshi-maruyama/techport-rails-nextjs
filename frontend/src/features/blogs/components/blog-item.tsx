import styles from "@/features/blogs/components/blog-item.module.scss";

export default function BlogItem() {
  return (
    <div className={styles.col3}>
      <div className={styles.card}>
        <div className={styles.imgframe}></div>
        <div className={styles.textbox}>
          <div className={styles.title}>blog1</div>
          <div className={styles.summary}>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </div>
        </div>
      </div>
    </div>
  );
}
