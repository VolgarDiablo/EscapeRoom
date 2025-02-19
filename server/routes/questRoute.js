const express = require("express");
const { getQuest } = require("../controllers/questController");
const router = express.Router();

router.get("/", getQuest);

module.exports = router;
