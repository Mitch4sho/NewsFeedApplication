import { Request, Response } from "express";
import axios from "axios";

interface Json {
  message: string;
}

type Send<T = Response> = (body?: Json) => T;

interface ArticleResponse extends Response {
  json: Send<this>;
}

const API_KEY = process.env.API_KEY;

// get all articles
const getArticles = (req: Request, res: ArticleResponse) => {
  res.json({ message: "get articles" });
};

const getData = async () => {
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

// get single article
const getArticle = (req: Request, res: ArticleResponse) => {
  res.json({ message: "get single article" });
};

module.exports = {
  getArticles,
  getArticle,
};
