import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  image: string;
};

export default function ImageComponent({ image }: Props): JSX.Element {
  const desktopView = useMediaQuery("(min-width: 668px)");
  return (
    <Box
      component="img"
      sx={{
        width: "100%",
        borderRadius: desktopView ? 10 : 2,
        mb: 3,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      alt=""
      src={image}
    />
  );
}
