import { useState, useEffect } from "react";
import { getDate } from "../utils";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header(): JSX.Element {
  const [date, setDate] = useState("");
  const desktopView = useMediaQuery("(min-width: 668px)");

  useEffect(() => {
    setDate(getDate());
  }, []);

  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      spacing={2}
      sx={{
        mb: 2,
        borderBottom: 1,
      }}
    >
      <Typography variant={desktopView ? "h1" : "h3"}>{date}</Typography>
      <Typography variant={desktopView ? "h1" : "h3"}>News</Typography>
    </Stack>
  );
}
