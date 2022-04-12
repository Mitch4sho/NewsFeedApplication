import { useContext } from "react";
import { Button, Stack } from "@mui/material";
import { getArticles } from "../core/articles/actions";
import ArticleContext from "../core/articles/context";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function QuickSelection(): JSX.Element {
  const { dispatch, quickMenuList } = useContext(ArticleContext);
  const desktopView = useMediaQuery("(min-width: 668px)");

  const handleQuery = async (query: string) => {
    query = query === "Top News" ? "top-headlines" : query;
    let data = await getArticles(query.toLowerCase());
    dispatch({ type: "GET_ARTICLES", payload: data });
  };

  return (
    <Stack
      spacing={desktopView ? 2 : 0.12}
      direction="row"
      justifyContent="center"
      sx={{ mb: 5 }}
    >
      {quickMenuList.map((item: string, id: number) => (
        <Button
          onClick={() => handleQuery(item)}
          variant="contained"
          size={desktopView ? "medium" : "small"}
          key={id}
          sx={{ fontSize: desktopView ? 15 : 9 }}
        >
          {item}
        </Button>
      ))}
    </Stack>
  );
}
