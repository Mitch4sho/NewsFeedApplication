export default class APIBase {
  getFullURL(url: string): URL {
    const development = "http://localhost:3001/";
    return new URL(url, development);
  }

  async fetch(url: string, method: string): Promise<any> {
    const fullUrl = this.getFullURL(url);

    let response;
    try {
      response = await fetch(fullUrl.toString());

      return await response.json();
    } catch (e) {
      console.error("Fetching failed");
      console.error(e);
      return [];
    }
  }
}
