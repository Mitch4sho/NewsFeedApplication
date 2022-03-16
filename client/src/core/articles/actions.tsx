import ArticlesAPI from "../api/articles";

const articles = new ArticlesAPI();

export async function getArticles() {
  const data = articles.getArticles();

  // TODO: structure data
  return data;
}

export async function getArticle(articles: [], idx: number) {
  const article = articles.find((element: any, id: number) => id === idx);
  return article;
}
