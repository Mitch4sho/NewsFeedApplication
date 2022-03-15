import React from "react";
import { Box } from "@mui/system";

type Props = {
  image: string;
};

export default function ImageComponent({ image }: Props) {
  return (
    <Box
      component="img"
      sx={{
        width: "100%",
      }}
      alt=""
      src={image}
    />
  );
}
