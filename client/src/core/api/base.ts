export default class APIBase {
  getFullURL(url: string): URL {
    return new URL(url, window.location.origin); // TODO: need to update to get correct url
  }

  async fetch(url: string, method: string, headers: Headers): Promise<any> {
    const fullUrl = this.getFullURL(url);

    const requestParams = {
      method: method,
      headers: headers,
    };

    let response;
    try {
      response = await fetch(fullUrl.toString(), requestParams);
    } catch (e) {
      console.error("fetch is failed");
      console.error(e);
      return {};
    }

    try {
      return await response.json();
    } catch (e) {
      // Catch non-Json responses
      console.error("NOT JSON");
      console.error(e);

      return {};
    }
  }
}
