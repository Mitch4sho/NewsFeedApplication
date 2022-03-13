import { Request, Response } from "express";
import axios from "axios";

interface Json {
  message: string;
  data: Object;
}

type Send<T = Response> = (body?: Json) => T;

interface ArticleResponse extends Response {
  json: Send<this>;
}

const API_KEY = process.env.API_KEY;
const url = `https://newsapi.org/v2/everything?q=kanye&pagesize=10&apiKey=${API_KEY}`;

// get all articles
const getArticles = async (req: Request, res: ArticleResponse) => {
  let data;
  try {
    const res = await axios.get(url);
    data = res.data;
  } catch (error) {
    console.log(error);
    return {};
  }

  return res.json({ message: "get articles", data: data });
};

module.exports = {
  getArticles,
};
