import { useContext, useEffect } from "react";
import ArticleListItem from "../components/ArticleListItem";
import ArticleContext from "../core/articles/context";
import PageButton from "../components/PageButton";
import { getArticles } from "../core/articles/actions";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

export default function NewsFeed(): JSX.Element {
  const { articles, dispatch, currentQuery } = useContext(ArticleContext);

  const getData = async () => {
    const data = await getArticles(currentQuery);
    dispatch({ type: "GET_ARTICLES", payload: data });
  };

  useEffect(() => {
    if (!articles.length) getData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        {articles.map((article: any, idx: number) => (
          <ArticleListItem key={idx} {...article} idx={idx} />
        ))}
      </Stack>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <PageButton value={"prev"} />
        <PageButton value={"next"} />
      </Stack>
    </Box>
  );
}
