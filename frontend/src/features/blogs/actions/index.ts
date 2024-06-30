"use server";
import blogRepository from "@/infrastructure/repositories/blog-repository";

export const getBlogs = async () => {
  const blogs = await blogRepository.getblogs();
  return blogs;
};
