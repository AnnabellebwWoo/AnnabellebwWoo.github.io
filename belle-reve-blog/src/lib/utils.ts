import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function getFiles(folder: string) {
  return fs.readdirSync(path.join(root, 'data', folder), 'utf-8')
}

export async function getPostBySlug(dataType: string, slug: string) {
  const source = fs.readFileSync(path.join(root, 'data', dataType, `${slug}.md`), 'utf8')

  const { data, content } = matter(source)

  return {
    frontMatter: data,
    markdownBody: content,
  }
}

export async function getAllPosts() {
    const files = fs.readdirSync(path.join(root, 'data'));
    return files.map((file) => {
        const source = fs.readFileSync(path.join(root, 'data', file), 'utf8');
        const { data } = matter(source);
        return { frontMatter: data, slug: file.replace('.md', '')};
    });
    }

export async function getPostsByCategory(category: string) {
    const files = fs.readdirSync(path.join(root, 'data'));
    return files
        .map((file) => {
            const source = fs.readFileSync(path.join(root, 'data, file'), 'utf8');
            const { data } = matter(source);
            return data.category === category ? { frontMatter: data, slug: file.replaceAll('.md', '')}: null;
        }
    )
}