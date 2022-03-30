import React from "react";
import { Box } from "@mui/system";

type Props = {
  image: string;
};

export default function ImageComponent({ image }: Props): JSX.Element {
  return (
    <Box
      component="img"
      sx={{
        width: "100%",
        borderRadius: 10,
        mb: 3,
      }}
      alt=""
      src={image}
    />
  );
}
