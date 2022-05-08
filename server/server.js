const express = require("express");
const dotenv = require("dotenv");
const controller = require("./controller/index");
const { sequelize } = require("./models");

const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", controller);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(process.env.PORT, () =>
  console.log(`서버 실행 : ${process.env.PORT}`)
);
