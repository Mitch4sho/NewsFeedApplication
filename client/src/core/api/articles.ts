import APIBase from "./base";

export default class ArticleAPI extends APIBase {
  async getArticles(): Promise<any> {
    const headers = new Headers();

    return await this.fetch("/get-articles/", "GET", headers);
  }
}
