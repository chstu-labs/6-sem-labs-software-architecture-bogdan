const express = require("express");
const app = express();
require("dotenv").config();

const jsonParser = express.json();
const {
  connectMongoDB,
  closeMongoDB,
  getUsers,
  getUser,
  insertUser,
  removeUserByName,
  updateUser,
  removeAllUsers,
} = require("./mongoDB.js");

const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.static("public"));

app.get("/api/users", async (req, res) => {
  await connectMongoDB();
  const users = await getUsers();
  await closeMongoDB();
  res.json(users);
});

app.get("/api/users/:id", async (req, res) => {
  await connectMongoDB();
  const user = await getUser(req.params.id);
  await closeMongoDB();
  res.json(user);
});

app.post("/api/users", jsonParser, async (req, res) => {
  await connectMongoDB();
  const response = await insertUser(req.body);
  await closeMongoDB();
  res.json(response);
});

app.delete("/api/users/", async (req, res) => {
  await connectMongoDB();
  await removeAllUsers();
  await closeMongoDB();
  res.json({ message: "All users removed" });
});

app.delete("/api/users/:id", async (req, res) => {
  await connectMongoDB();
  await removeUserByName(req.params.id);
  await closeMongoDB();
  res.json({ message: "User removed", _id: req.params.id });
});

app.put("/api/users/", jsonParser, async (req, res) => {
  await connectMongoDB();
  const response = await updateUser(req.body);
  await closeMongoDB();
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`);
});
