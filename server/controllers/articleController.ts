import { Request, Response } from "express";
import axios from "axios";

interface Json {
  articles: Object;
  query: string;
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
  let query;
  if (req.query && req.query.q) {
    query = (req.query as any).q;
  }

  let url;

  if (query === "top-headlines") {
    url = `https://newsapi.org/v2/${query}?country=us&pagesize=15&apiKey=${API_KEY}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${query}&pagesize=15&apiKey=${API_KEY}`;
  }

  let data;
  try {
    const res = await axios.get(url);
    data = res.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }

  return res.json({ articles: data, query: query });
};

const getPage = async (req: Request, res: Response): Promise<any> => {
  let pageNumber = req.query.pageNumber;
  const query = req.query.q;
  if (pageNumber && pageNumber <= "0") pageNumber = "1";

  let url;
  if (query === "top-headlines") {
    url = `https://newsapi.org/v2/${query}?country=us&pagesize=15&page=${pageNumber}&apiKey=${API_KEY}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${query}&pagesize=15&page=${pageNumber}&apiKey=${API_KEY}`;
  }

  let data;
  try {
    const res = await axios.get(url);
    data = res.data.articles;
  } catch (error) {
    console.log(error);
    return res.json({
      message: "error",
      data: { articles: [] },
    });
  }

  return res.json({
    message: "success",
    data: { articles: data, page: pageNumber, loading: false },
  });
};

module.exports = {
  getArticles,
  getPage,
};
