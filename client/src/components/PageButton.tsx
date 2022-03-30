import { useContext } from "react";
import { Button } from "@mui/material";
import ArticleContext from "../core/articles/context";
import { getNextPage, getPrevPage } from "../core/articles/actions";

type Props = {
  value: string;
};

export default function PageButton({ value }: Props): JSX.Element {
  const { page, dispatch, currentQuery } = useContext(ArticleContext);

  const handleNextPage = async () => {
    let { data } = await getNextPage(parseInt(page) + 1, currentQuery);
    dispatch({ type: "SET_PAGE", payload: data });
  };

  const handlePrevPage = async () => {
    let { data } = await getPrevPage(parseInt(page) - 1, currentQuery);
    dispatch({ type: "SET_PAGE", payload: data });
  };

  return (
    <Button
      onClick={() => (value === "next" ? handleNextPage() : handlePrevPage())}
    >
      {value}
    </Button>
  );
}
