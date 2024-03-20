//start.js
require("dotenv").config();
const app = require("./server.js");

app.listen(process.env.PROXY_PORT, () => {
  console.log("Server start at localhost:3001/test");
});
