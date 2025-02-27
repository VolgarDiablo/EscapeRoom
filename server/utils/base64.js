const fs = require("fs");
const path = require("path");

function base64(data) {
  try {
    const genres = JSON.parse(data);

    const genresWithBase64 = genres.map((genre) => {
      const svgPath = path.join(__dirname, "..", genre.path);
      try {
        const svgData = fs.readFileSync(svgPath, "utf-8");
        const base64Data = `data:image/svg+xml;base64,${Buffer.from(
          svgData
        ).toString("base64")}`;
        return { ...genre, base64: base64Data };
      } catch (err) {
        console.error(`Ошибка при чтении файла ${svgPath}:`, err);
        return { ...genre, base64: null };
      }
    });

    return genresWithBase64;
  } catch (error) {
    console.error("Ошибка чтения жанров:", error);
    return [];
  }
}

module.exports = { base64 };
