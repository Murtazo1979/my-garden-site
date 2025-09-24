import { getPosts } from "../services/postService";

describe("Post Service API", () => {
  test("should return an array of posts", async () => {
    const posts = await getPosts();
    expect(Array.isArray(posts)).toBe(true);
  });

  test("each post should have title and content", async () => {
    const posts = await getPosts();
    posts.forEach((post) => {
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("content");
    });
  });
});
