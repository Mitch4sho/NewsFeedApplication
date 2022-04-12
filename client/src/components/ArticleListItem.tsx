import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ArticleContext from "../core/articles/context";
import ImageComponent from "./ImageComponent";
import { getArticle } from "../core/articles/actions";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  title: string;
  description: string;
  source: {
    id?: string;
    name: string;
  };
  urlToImage: string;
  idx: number;
};

export default function ArticleListItem({
  title,
  description,
  source,
  urlToImage,
  idx,
}: Props): JSX.Element {
  const { articles, dispatch } = useContext(ArticleContext);
  let navigate = useNavigate();
  const desktopView = useMediaQuery("(min-width: 668px)");

  const handleClick = async () => {
    const article = await getArticle(articles, idx);
    dispatch({ type: "GET_ARTICLE", payload: article });
    navigate("/article");
    window.scrollTo(0, 0);
  };

  return (
    <Box
      onClick={handleClick}
      component="li"
      sx={{
        border: 1,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        width: desktopView ? 1000 : null,
        listStyle: "none",
        padding: desktopView ? 5 : 2,
        borderRadius: 5,

        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <ImageComponent image={urlToImage} />
      <Typography
        paragraph
        gutterBottom={true}
        sx={{ fontSize: 12, textTransform: "uppercase" }}
      >
        {source.name}
      </Typography>
      <Typography variant="h3" gutterBottom={true} sx={{ fontSize: 24 }}>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom={true} sx={{ fontSize: 12 }}>
        {description}
      </Typography>
    </Box>
  );
}
