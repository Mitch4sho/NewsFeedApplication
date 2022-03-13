require("dotenv").config();
const express = require("express");
import { Application } from "express";

const app: Application = express();

app.use("/api/get-articles", require("./routes/articleRoutes"));

app.listen(3001, () => console.log("server running on 3001"));
