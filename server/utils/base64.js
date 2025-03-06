const fs = require("fs");
const path = require("path");
const mime = require("mime-types");

function base64(data, filePath) {
  try {
    let genres = JSON.parse(data);

    const genresWithBase64 = genres.map((genre) => {
      if (!genre.path) {
        return genre;
      }

      const imgPath = path.join(__dirname, genre.path);

      try {
        const mimeType = mime.lookup(imgPath);
        if (!mimeType) {
          throw new Error(`Не удалось определить MIME-тип для ${imgPath}`);
        }

        const imgData = fs.readFileSync(imgPath);

        const base64Data = `data:${mimeType};base64,${imgData.toString(
          "base64"
        )}`;

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
