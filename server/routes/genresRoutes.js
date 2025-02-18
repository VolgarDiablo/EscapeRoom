const express = require("express");
const { getGenres } = require("../controllers/genresController");
const router = express.Router();

router.get("/", getGenres);

module.exports = router;
