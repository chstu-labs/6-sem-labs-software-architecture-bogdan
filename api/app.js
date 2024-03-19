require("dotenv").config();
const express = require("express");
const app = express();

app.use(function (request, response) {
  response.send("<h1>Главная страница</h1>");
});

app.listen(3000);
