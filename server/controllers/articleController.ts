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
const url = `https://newsapi.org/v2/everything?q=kanye&pagesize=6&apiKey=${API_KEY}`;

// get all articles
const getArticles = async (
  req: Request,
  res: ArticleResponse
): Promise<any> => {
  let data;
  try {
    console.log("getting articles");
    const res = await axios.get(url);
    data = res.data.articles;
    console.log("returning articles");
  } catch (error) {
    console.log(error);
    return [];
  }

  return res.json({ message: "Success", data: data });
};

module.exports = {
  getArticles,
};
