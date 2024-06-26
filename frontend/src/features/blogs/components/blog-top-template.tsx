import Header from "@/components/header/header";
import { BlogTopTemplateProps } from "@/features/blogs/types";
import styles from "@/features/blogs/components/blog-top-template.module.scss";
import BlogItem from "./blog-item";

export default function BlogTopTemplate(props: BlogTopTemplateProps) {
  const { user, blogs } = props;
  return (
    <div>
      <Header user={user} />
      <div className={styles.container}>
        {blogs.map((blog) => {
          return <BlogItem blog={blog} key={blog.notionKey} />;
        })}
      </div>
    </div>
  );
}
