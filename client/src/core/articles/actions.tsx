import ArticlesAPI from "../api/articles";

const articles = new ArticlesAPI();

export async function getArticles() {
  const data = articles.getArticles();

  // TODO: structure data
  return data;
}
