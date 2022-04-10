import { useContext, useEffect, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import ArticleListItem from "../components/ArticleListItem";
import QuickSelection from "../components/QuickSelection";
import ArticleContext from "../core/articles/context";
import { getArticles } from "../core/articles/actions";
import { getNextPage } from "../core/articles/actions";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function NewsFeed(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const { articles, dispatch, currentQuery, page, hasNextPage } =
    useContext(ArticleContext);

  const handleNextPage = async () => {
    if (articles.length && !loading) {
      setLoading(true);
      let res = await getNextPage(parseInt(page) + 1, currentQuery);
      let data = res.data;

      if (res.message !== "success") {
        console.error("error happened getting the next page");
        return;
      }

      dispatch({ type: "SET_PAGE", payload: data });
      setLoading(false);

      if (articles.length >= 38) {
        dispatch({ type: "NEXT_PAGE", payload: false });
      }
    }
  };

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleNextPage,
    rootMargin: "0px 0px 400px 0px",
  });

  const getData = async () => {
    const data = await getArticles(currentQuery);
    dispatch({ type: "GET_ARTICLES", payload: data });
  };

  useEffect(() => {
    if (!articles.length) getData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <QuickSelection />
      <Stack spacing={2} justifyContent="center" alignItems="center">
        {articles ? (
          articles.map((article: any, idx: number) => (
            <ArticleListItem key={idx} {...article} idx={idx} />
          ))
        ) : (
          <Typography variant="h3" gutterBottom={true} sx={{ fontSize: 24 }}>
            NO DATA
          </Typography>
        )}
        {loading || hasNextPage ? (
          <Typography
            variant="h3"
            gutterBottom={true}
            sx={{ fontSize: 24 }}
            ref={sentryRef}
          >
            ...Loading
          </Typography>
        ) : (
          <Typography
            variant="h3"
            gutterBottom={true}
            sx={{ fontSize: 24 }}
            ref={sentryRef}
          >
            Everything is Loaded
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
