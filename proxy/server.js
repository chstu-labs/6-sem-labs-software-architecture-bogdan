require("dotenv").config();
const app = require("express")();
const axios = require("axios");

app.get("/", (_req, res) => {
  axios.get(`${process.env.HOST}:${process.env.PORT}`).then((response) => {
    res.send(response.data);
  });
});

app.get("/test", (_req, res) => {
  axios.get(`${process.env.HOST}:${process.env.PORT}/test`).then((response) => {
    res.send(response.data);
  });
});

module.exports = app;
