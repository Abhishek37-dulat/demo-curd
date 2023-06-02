const express = require("express");
const route = express.Router();
const {
  allUser,
  User,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

route.get("/", allUser);
route.get("/:id", User);

route.post("/", postUser);

route.put("/:id", updateUser);

route.delete("/:id", deleteUser);

module.exports = route;
