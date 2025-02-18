const fs = require("fs");
const path = require("path");

const getGenres = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/genres.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    const genres = JSON.parse(data);
    res.json(genres);
  } catch (error) {
    console.error("Ошибка чтения файла:", error);
    res.status(500).json({ error: "Ошибка сервера при чтении жанров" });
  }
};

module.exports = { getGenres };
