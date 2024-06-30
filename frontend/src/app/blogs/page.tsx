import BlogTopTemplate from "@/features/blogs/components/blog-top-template";
import { getUser } from "@/features/users/actions";

export default async function BlogsPage() {
  const user = await getUser();
  return <BlogTopTemplate user={user} />;
}
