const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
import { Application } from "express";

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Routes
app.use("/api/get-articles", require("./routes/articleRoutes"));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => console.log("server running on 3001"));
