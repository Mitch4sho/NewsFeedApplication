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

// get all articles
const getArticles = async (
  req: Request,
  res: ArticleResponse
): Promise<any> => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&pagesize=6&apiKey=${API_KEY}`;
  let data;

  try {
    const res = await axios.get(url);
    data = res.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }

  return res.json({ message: "Success", data: data });
};

const getSearchedArticles = async (
  req: Request,
  res: Response
): Promise<any> => {
  const query = req.route.path.split("/").join("");
  const url = `https://newsapi.org/v2/everything?q=${query}&pagesize=6&apiKey=${API_KEY}`;
  let data;

  try {
    const res = await axios.get(url);
    data = res.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }

  return res.json({ message: "Success", data: data });
};

module.exports = {
  getArticles,
  getSearchedArticles,
};
