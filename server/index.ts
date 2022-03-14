require("dotenv").config();
const express = require("express");
const cors = require("cors");
import { Application } from "express";

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/api/get-articles", require("./routes/articleRoutes"));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(3001, () => console.log("server running on 3001"));
