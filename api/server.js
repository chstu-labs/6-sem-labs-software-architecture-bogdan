//server.js
require("dotenv").config();
const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send({ message: process.env.HELLO });
  res.end();
});

module.exports = app;
