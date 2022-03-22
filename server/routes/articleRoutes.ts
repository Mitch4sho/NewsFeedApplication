const express = require("express");
const router = express.Router();
const {
  getArticles,
  getSearchedArticles,
} = require("../controllers/articleController");

//@desc Get initial top news articles from
//@route /api/get-articles
router.get("/", getArticles);

//@desc Get various articles from the quick menu selection
//@route /api/get-articles/{path}
router.get("/topnews", getArticles);
router.get("/business", getSearchedArticles);
router.get("/entertainment", getSearchedArticles);
router.get("/health", getSearchedArticles);
router.get("/kanye", getSearchedArticles);

module.exports = router;
