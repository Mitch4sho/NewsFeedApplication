import React, { useContext } from "react";
import ArticleContext from "../core/articles/context";
import { getArticles } from "../core/articles/actions";

interface ArticleType {
  author: string;
}

export default function Newsfeed() {
  const { articles, dispatch } = useContext(ArticleContext);

  const getData = async () => {
    const articles = await getArticles();
    dispatch({ type: "GET_ARTICLES", payload: articles.data });
  };

  return (
    <div>
      <h1>News Feed</h1>
      <button onClick={getData}>Get articles</button>
      <h1>
        {articles.map((article: ArticleType, id: number) => (
          <li key={id}>{article.author}</li>
        ))}
      </h1>
    </div>
  );
}
