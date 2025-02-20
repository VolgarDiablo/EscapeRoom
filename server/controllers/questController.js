const fs = require("fs");
const path = require("path");

const getQuest = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/quest.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    const quests = JSON.parse(data);
    res.json(quests);
  } catch (error) {
    console.error("Ошибка чтения файла:", error);
    res.status(500).json({ error: "Ошибка сервера при чтении жанров" });
  }
};

module.exports = { getQuest };
