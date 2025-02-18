const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const genresRoutes = require("./routes/genresRoutes");

const app = express();

app.use(
  cors({
    origin: config.CORS_ORIGIN,
  })
);

app.use(express.json());

app.use("/genres", genresRoutes);

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
