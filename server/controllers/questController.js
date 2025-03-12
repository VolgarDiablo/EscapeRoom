const fs = require("fs");
const path = require("path");
const { base64 } = require("../utils/base64");

const getAllQuest = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/quest.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    const arrayData64 = base64(data, filePath);
    res.json(arrayData64);
  } catch (error) {
    console.error("Ошибка чтения файла:", error);
    res.status(500).json({ error: "Ошибка сервера при чтении жанров" });
  }
};

const getQuestById = (req, res) => {
  try {
    const questId = req.params.id;
    const filePath = path.join(__dirname, "../data/quest.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    const quest = JSON.parse(data);
    res.json({ message: `${questId}`, quest });
  } catch (error) {
    console.error("Ошибка чтения файла:", error);
    res.status(500).json({ error: "Ошибка сервера при чтении жанров" });
  }
};

module.exports = { getAllQuest, getQuestById };
