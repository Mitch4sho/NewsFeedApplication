import { useContext } from "react";
import ArticleContext from "../core/articles/context";
import ImageComponent from "./ImageComponent";
import { useNavigate } from "react-router-dom";
import { getArticle } from "../core/articles/actions";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

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

  const handleClick = async () => {
    const article = await getArticle(articles, idx);
    dispatch({ type: "GET_ARTICLE", payload: article });
    navigate("/article");
  };

  return (
    <Box
      onClick={handleClick}
      component="li"
      sx={{
        border: 1,
        width: 900,
        listStyle: "none",
        padding: 5,
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
