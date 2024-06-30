import { getBlogs } from "@/features/blogs/actions";
import BlogTopTemplate from "@/features/blogs/components/blog-top-template";
import { getUser } from "@/features/users/actions";

export default async function BlogsPage() {
  const user = await getUser();
  const blogs = await getBlogs();
  return <BlogTopTemplate user={user} blogs={blogs} />;
}
