const fs = require("fs");
const path = require("path");

function base64(data, filePath) {
  try {
    let genres = JSON.parse(data);

    const genresWithBase64 = genres.map((genre) => {
      if (!genre.path) {
        return genre;
      }

      const imgPath = path.join(__dirname, genre.path);

      try {
        const imgData = fs.readFileSync(imgPath, "utf-8");
        const base64Data = `data:image/svg+xml;base64,${Buffer.from(
          imgData
        ).toString("base64")}`;

        const { path, ...updatedGenre } = genre;
        return { ...updatedGenre, base64: base64Data };
      } catch (err) {
        console.error(`Ошибка при чтении файла ${imgPath}:`, err);

        const { path, ...updatedGenre } = genre;
        return updatedGenre;
      }
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify(genresWithBase64, null, 2),
      "utf-8"
    );

    return genresWithBase64;
  } catch (error) {
    console.error("Ошибка парсинга JSON:", error);
    return [];
  }
}

module.exports = { base64 };
