import React, { useContext, useEffect } from "react";
import ArticleListItem from "../components/ArticleListItem";
import ArticleContext from "../core/articles/context";
import { getArticles } from "../core/articles/actions";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

export default function Newsfeed() {
  const { articles, dispatch } = useContext(ArticleContext);

  const getData = async () => {
    const articles = await getArticles();
    dispatch({ type: "GET_ARTICLES", payload: articles.data });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        {articles.map((article: any, idx: number) => (
          <ArticleListItem key={idx} {...article} />
        ))}
      </Stack>
    </Box>
  );
}
