import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { getDate } from "../utils";

export default function Header() {
  const [date, setDate] = useState("");

  // retrieve todays date
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
      <Typography variant="h1">{date}</Typography>
      <Typography variant="h1">News</Typography>
    </Stack>
  );
}
