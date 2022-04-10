import ArticlesAPI from "../api/articles";

const articles = new ArticlesAPI();

export async function getArticles(query: string) {
  const data = articles.getArticles(query);
  return data;
}

export async function getArticle(articles: [], idx: number) {
  return articles.find((element: any, id: number) => id === idx);
}

export async function getNextPage(pageNumber: number, query: string) {
  return await articles.getNextPage(pageNumber, query);
}
