const express = require("express");
const router = express.Router();
const { getArticles, getPage } = require("../controllers/articleController");

//@desc Get initial top news articles from
//@route /api/get-articles
router.get("/", getArticles);

router.get("/get-next-page", getPage);

module.exports = router;
