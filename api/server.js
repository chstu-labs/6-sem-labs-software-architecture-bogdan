//server.js
require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: process.env.HELLO });
  res.end();
});

app.get("/test", (req, res) => {
  res.send({ message: process.env.BYE });
  res.end();
});

module.exports = app;
