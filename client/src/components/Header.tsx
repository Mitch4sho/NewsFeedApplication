import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { getDate } from "../utils";

export default function Header() {
  const [date, setDate] = useState("");

  // retrieve todays date
  useEffect(() => {
    setDate(getDate());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: 1,
      }}
    >
      <h1>{date}</h1>
      <h1>News</h1>
    </Box>
  );
}
