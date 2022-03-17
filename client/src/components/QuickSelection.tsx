import React, { useState } from "react";
import { Button, Stack } from "@mui/material";

export default function QuickSelection(): JSX.Element {
  const [list, setList] = useState([
    "Top News",
    "Tech",
    "Sports",
    "Entertainment",
    "Kanye",
  ]);

  return (
    <Stack spacing={2} direction="row" justifyContent="center" sx={{ mb: 5 }}>
      {list.map((item, id) => (
        <Button variant="contained" key={id}>
          {item}
        </Button>
      ))}
    </Stack>
  );
}
