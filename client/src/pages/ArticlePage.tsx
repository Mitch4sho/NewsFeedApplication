import React, { useContext } from "react";
import ArticleContext from "../core/articles/context";

export default function ArticlePage(): JSX.Element {
  const { article } = useContext(ArticleContext);
  console.log({ article });
  return (
    <div>
      <h1>Article Page</h1>
      {/* 
        image
        title
        description
        author
        date published
        content
      */}
      <h1>{article.author}</h1>
    </div>
  );
}
