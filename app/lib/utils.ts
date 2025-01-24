import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostProps } from "./types";

const root = process.cwd();

export async function getFiles() {
  return fs.readdirSync(path.join(root, "app", "posts"), "utf-8");
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(root, "app", "posts", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    categories: data.categories,
    title: data.title,
    slug: slug,
    markdownBody: content,
    publishedDate: data.publishedDate,
  };
}

// export async function getPostsByCategory(category: string) {
//     const files = fs.readdirSync(path.join(root, 'data'));
//     return files
//         .map((file) => {
//             const source = fs.readFileSync(path.join(root, 'data, file'), 'utf8');
//             const { data } = matter(source);
//             return data.category === category ? { frontMatter: data, slug: file.replaceAll('.md', '')}: null;
//         }
//     )
// }

export async function getAllPosts(): Promise<BlogPostProps[]> {
  const files = fs.readdirSync(path.join(root,"app", "posts"));

  return files.map((postSlug) => {
    const filePath = path.join(root, "app", "posts", postSlug);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      categories: data.categories,
      title: data.title,
      slug: postSlug.replace(".md", ""),
      markdownBody: content,
      publishedDate: data.publishedDate,
    };
  });
}
