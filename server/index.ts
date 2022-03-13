import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

// Main route
app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(3001, () => console.log("server running on 3001"));
