import Blog from "@/models/blog";
import User from "@/models/user";

export type BlogTopTemplateProps = {
  user: User;
  blogs: Blog[];
};

export type BlogItemProps = {
  blog: Blog;
};
