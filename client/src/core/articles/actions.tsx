import articles from "../api/articles";

export function getArticles() {
  return testCall();
}

function testCall() {
  return [{ text: "test from actions" }];
}
