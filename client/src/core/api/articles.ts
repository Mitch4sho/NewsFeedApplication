import APIBase from "./base";

export default class ArticleAPI extends APIBase {
  async getArticles(): Promise<any> {
    return await this.fetch("api/get-articles", "GET");
  }
}
