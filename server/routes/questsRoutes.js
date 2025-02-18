const express = require("express");
const { getQuests } = require("../controllers/questsController");
const router = express.Router();

router.get("/", getQuests);

module.exports = router;
