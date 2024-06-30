import backendClient from "@/lib/backend-client";
import Blog from "@/models/blog";

class BlogRepository {
  async getblogs(): Promise<Blog[]> {
    const res = await backendClient.get("/api/v1/blogs");
    if (res.ok) {
      const data = await res.json();
      return data.map((blog: any) => {
        return this.toModel(blog);
      });
    } else {
      return [];
    }
  }

  private toModel(data: any) {
    return new Blog(data.title, data.summary, data.notionKey);
  }
}

const blogRepository = new BlogRepository();
export default blogRepository;
