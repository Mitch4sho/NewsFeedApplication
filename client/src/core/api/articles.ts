import APIBase from "./base";

export default class ArticleAPI extends APIBase {
  async getArticles(query: string): Promise<any> {
    return await this.fetch(`api/get-articles?q=${query}`, "GET");
  }

  async getNextPage(pageNumber: number, query: string): Promise<any> {
    let res = await this.fetch(
      `api/get-articles/get-next-page?pageNumber=${pageNumber}&q=${query}`,
      "GET"
    );
    return res;
  }
}
