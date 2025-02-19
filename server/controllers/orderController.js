const fs = require("fs");
const path = require("path");

const addOrder = (req, res) => {
  try {
    const order = req.body;
    const filePath = path.join(__dirname, "../data/order.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    let myObject = JSON.parse(data);

    const currentDate = new Date();
    const formattedTime = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")} ${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    order.time = formattedTime;

    myObject.unshift(order);
    const newData = JSON.stringify(myObject, null, 2);
    fs.writeFile(filePath, newData, (err) => {
      if (err) throw err;
    });
    console.log(myObject);
    res.send("Ваша заявка успешно была оформлена");
  } catch (error) {
    console.error("Ошибка добавления заяви:", error);
    res.status(500).json({ error: "Ошибка сервера при добавление заявки" });
  }
};

module.exports = { addOrder };
