const express = require("express");
const router = express.Router();
const {
  getArticles,
  getSearchedArticles,
} = require("../controllers/articleController");

router.get("/", getArticles);
router.get("/topnews", getArticles);
router.get("/business", getSearchedArticles);
router.get("/entertainment", getSearchedArticles);
router.get("/health", getSearchedArticles);
router.get("/kanye", getSearchedArticles);

module.exports = router;
