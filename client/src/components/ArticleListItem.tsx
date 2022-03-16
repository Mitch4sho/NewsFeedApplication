import React from "react";
import ImageComponent from "./ImageComponent";
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
};

export default function ArticleListItem({
  title,
  description,
  source,
  urlToImage,
}: Props): JSX.Element {
  // TODO: add a click function to route to single page article
  const handleClick = () => {
    console.log("re route to single page");
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
      }}
    >
      <ImageComponent image={urlToImage} />
      <Typography paragraph gutterBottom={true} sx={{ fontSize: 12 }}>
        {source.name}
      </Typography>
      <Typography variant="h3" gutterBottom={true} sx={{ fontSize: 24 }}>
        {title}
      </Typography>
      <Typography paragraph gutterBottom={true} sx={{ fontSize: 12 }}>
        {description}
      </Typography>
    </Box>
  );
}
