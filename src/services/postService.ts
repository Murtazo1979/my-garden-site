// src/services/postService.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export interface Post {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export const postService = {
  async getAll(): Promise<Post[]> {
    const { data } = await axios.get(${API_URL}/posts);
    return data;
  },

  async getById(id: string): Promise<Post> {
    const { data } = await axios.get(${API_URL}/posts/${id});
    return data;
  },

  async create(post: Omit<Post, "id" | "createdAt" | "updatedAt">): Promise<Post> {
    const { data } = await axios.post(${API_URL}/posts, post);
    return data;
  },

  async update(id: string, post: Partial<Post>): Promise<Post> {
    const { data } = await axios.put(${API_URL}/posts/${id}, post);
    return data;
  },

  async remove(id: string): Promise<void> {
    await axios.delete(${API_URL}/posts/${id});
  },
};
