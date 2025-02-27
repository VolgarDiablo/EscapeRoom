const { base64 } = require("../utils/base64");

const getGenre = (req, res) => {
  try {
    const arrayData64 = base64();
    res.json(arrayData64);
  } catch (error) {
    console.error("Ошибка чтения файла:", error);
    res.status(500).json({ error: "Ошибка сервера при чтении жанров" });
  }
};

module.exports = { getGenre };
