import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ArticleContext from "../core/articles/context";
import ImageComponent from "../components/ImageComponent";
import { getDate } from "../utils";
import { Typography, Link, Container, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ArticlePage(): JSX.Element {
  const navigation = useNavigate();
  const { article, scrollPos } = useContext(ArticleContext);
  const { author, description, publishedAt, title, urlToImage, source, url } =
    article;
  const date = getDate(publishedAt);
  const desktopView = useMediaQuery("(min-width: 668px)");

  const handleBackBtn = () => {
    navigation("/");
  };

  return (
    <Container sx={{ mb: 3 }}>
      <Typography variant={desktopView ? "h1" : "h3"} gutterBottom={true}>
        {source.name}
      </Typography>
      <Button
        onClick={() => handleBackBtn()}
        variant="contained"
        sx={{ mb: 3 }}
      >
        Go back to news feed
      </Button>
      <ImageComponent image={urlToImage} />
      <Typography variant={desktopView ? "h3" : "h4"} gutterBottom={true}>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        {description}
      </Typography>
      <Typography paragraph gutterBottom={true}>
        By {author} {date}
      </Typography>
      <Link
        display="block"
        href={url}
        underline="none"
        target="_blank"
        rel="noreferrer"
        variant={desktopView ? "h3" : "h4"}
        gutterBottom={true}
      >
        Click here for the full article
      </Link>
      <Button onClick={() => handleBackBtn()} variant="contained">
        Go back to news feed
      </Button>
    </Container>
  );
}
