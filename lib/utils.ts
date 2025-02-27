import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostProps } from "./types";

const root = process.cwd();

export async function getFiles() {
  return fs.readdirSync(path.join(root, "public", "posts"), "utf-8");
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(root, "public", "posts", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    categories: data.categories,
    title: data.title,
    slug: slug,
    markdownBody: content,
    publishedDate: data.publishedDate,
    excerpt: data.excerpt,
    tags:
      typeof data.tags === "string"
        ? data.tags.split(",").map((tag: string) => ` ${tag.trim()}`)
        : Array.isArray(data.tags)
        ? data.tags.map((tag: string) => ` ${tag}`)
        : [],
    thumbnail: data.thumbnail,
  };
}

export async function getAllPosts(): Promise<BlogPostProps[]> {
  const files = fs.readdirSync(path.join(root, "public", "posts"));

  return files.map((postSlug) => {
    const filePath = path.join(root, "public", "posts", postSlug);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      categories: data.categories,
      title: data.title,
      slug: postSlug.replace(".md", ""),
      markdownBody: content,
      publishedDate: data.publishedDate,
      excerpt: data.excerpt,
      tags:
        typeof data.tags === "string"
          ? data.tags.split(",").map((tag: string) => ` ${tag.trim()}`)
          : Array.isArray(data.tags)
          ? data.tags.map((tag: string) => ` ${tag}`)
          : [],
      thumbnail: data.thumbnail,
    };
  });
}

export async function getPostsByCategory(
  category: string
): Promise<BlogPostProps[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.categories.includes(category));
}
