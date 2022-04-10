import { useContext } from "react";
import { Button, Stack } from "@mui/material";
import { getArticles } from "../core/articles/actions";
import ArticleContext from "../core/articles/context";

export default function QuickSelection(): JSX.Element {
  const { dispatch, quickMenuList } = useContext(ArticleContext);

  const handleQuery = async (query: string) => {
    query = query === "Top News" ? "top-headlines" : query;
    let data = await getArticles(query.toLowerCase());
    dispatch({ type: "GET_ARTICLES", payload: data });
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="center" sx={{ mb: 5 }}>
      {quickMenuList.map((item: string, id: number) => (
        <Button onClick={() => handleQuery(item)} variant="contained" key={id}>
          {item}
        </Button>
      ))}
    </Stack>
  );
}
