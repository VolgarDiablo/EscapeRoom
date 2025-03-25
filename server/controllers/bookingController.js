const fs = require("fs");
const path = require("path");

const addBooking = (req, res) => {
  try {
    const booking = req.body;
    const filePath = path.join(__dirname, "../data/booking.txt");
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
    booking.time = formattedTime;

    myObject.unshift(booking);
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

module.exports = { addBooking };
