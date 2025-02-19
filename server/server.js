const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const genreRoute = require("./routes/genreRoute");
const questRoute = require("./routes/questRoute");
const orderRoute = require("./routes/orderRouter");

const app = express();

app.use(
  cors({
    origin: config.CORS_ORIGIN,
  })
);

app.use(express.json());

app.use("/genre", genreRoute);
app.use("/quest", questRoute);
app.use("/order", orderRoute);

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
