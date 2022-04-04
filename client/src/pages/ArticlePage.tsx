import { useContext } from "react";
import ArticleContext from "../core/articles/context";
import ImageComponent from "../components/ImageComponent";
import { getDate } from "../utils";
import { useNavigate } from "react-router-dom";
import { Typography, Link, Container, Button } from "@mui/material";

export default function ArticlePage(): JSX.Element {
  const navigation = useNavigate();
  const { article } = useContext(ArticleContext);
  const { author, description, publishedAt, title, urlToImage, source, url } =
    article;
  const date = getDate(publishedAt);

  return (
    <Container>
      <Typography variant="h1" gutterBottom={true}>
        {source.name}
      </Typography>
      <Button
        onClick={() => navigation("/")}
        variant="contained"
        sx={{ mb: 3 }}
      >
        Go back to news feed
      </Button>
      <ImageComponent image={urlToImage} />
      <Typography variant="h3" gutterBottom={true}>
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
        variant="h3"
        gutterBottom={true}
      >
        Click here for the full article
      </Link>
      <Button onClick={() => navigation("/")} variant="contained">
        Go back to news feed
      </Button>
    </Container>
  );
}
