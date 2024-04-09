const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema(
  { name: String, age: Number },
  { versionKey: false }
);
const User = mongoose.model("User", userScheme);

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/usersdb", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
};

const insertUser = async (user) => {
  const newUser = new User(user);
  const result = await newUser.save();
  return result;
};

const getUser = async (id) => {
  try {
    return await User.findById(id);
  } catch (e) {
    console.log(e);
  }
};

const getUsers = async () => {
  try {
    return await User.find({});
  } catch (e) {
    console.log(e);
  }
};

const removeUserByName = async (id) => {
  try {
    await User.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};

const removeAllUsers = async () => {
  try {
    await User.deleteMany({});
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (user) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  } catch (e) {
    console.log(e);
  }
};

const closeMongoDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  connectMongoDB,
  insertUser,
  getUser,
  getUsers,
  removeUserByName,
  updateUser,
  removeAllUsers,
  closeMongoDB,
};
