import fs from "fs";
import path from "path";
import matter from "gray-matter";

let articles: (
  | { data: { [key: string]: any }; content: string; slug: string }
  | undefined
)[];

function fetchArticle() {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "pages", "posts"), {
    withFileTypes: true,
  });

  articles = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "posts", file.name),
        "utf-8"
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, "");
      return { data, content, slug };
    })
    .filter((post) => post);
}

fetchArticle();

export const getArticles = () => {
  return articles;
};

export const getArticleBySlug = (slug: string) => {
  const articles = getArticles();

  if (!articles.map((a) => a?.slug).includes(slug)) {
    return {};
  }

  return articles.find((s) => slug === s?.slug);
};

export const getArticlesByTag = (tag: string) => {
  const articles = getArticles();

  return articles.filter((s) => s?.data.tags.includes(tag));
};

export const getArticlesByAuthor = (author_id: string) => {
  const articles = getArticles();

  return articles.filter((s) => s?.data.author_id === Number(author_id));
};
