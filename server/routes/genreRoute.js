const express = require("express");
const { getGenre } = require("../controllers/genreController");
const router = express.Router();

router.get("/", getGenre);

module.exports = router;
