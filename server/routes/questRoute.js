const express = require("express");
const { getAllQuest, getQuestById } = require("../controllers/questController");
const router = express.Router();

router.get("/", getAllQuest);
router.get("/:id", getQuestById);

module.exports = router;
