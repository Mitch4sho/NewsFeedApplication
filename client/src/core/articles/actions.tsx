import ArticlesAPI from "../api/articles";

const articles = new ArticlesAPI();

export async function getArticles() {
  const data = articles.getArticles();
  return data;
}

export async function getArticle(articles: [], idx: number) {
  return articles.find((element: any, id: number) => id === idx);
}

export async function getClickedArticles(query: string) {
  return articles.getSearchedArticles(query.split(" ").join("").toLowerCase());
}
