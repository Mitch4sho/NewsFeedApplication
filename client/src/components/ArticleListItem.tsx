import React from "react";
import ImageComponent from "./ImageComponent";
import { Box } from "@mui/system";

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
  return (
    <Box
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
      <Box component="p" sx={{ fontSize: 12 }}>
        {source.name}
      </Box>
      <Box component="p" sx={{ fontSize: 24 }}>
        {title}
      </Box>
      <Box component="p" sx={{ fontSize: 12 }}>
        {description}
      </Box>
    </Box>
  );
}
