const mongoose = require("mongoose");
const Userdata = require("../models/Userdata.js");

const allUser = async (req, res) => {
  try {
    const Udata = await Userdata.find();
    res.status(200).send(Udata);
  } catch (err) {
    console.log(err);
  }
};

const User = (req, res) => {
  Userdata.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postUser = async (req, res) => {
  const { name, email, phone, password, course } = req.body;
  if (!name || !email || !phone || !password || !course) {
    return res.status(401).send("all fields are required!!!");
  }
  try {
    const Udata = new Userdata({
      name,
      email,
      phone,
      password,
      course,
    });
    await Udata.save();
    return res.status(201).send(Udata);
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const Udata = await Userdata.findById(id);
  if (!Udata) {
    return res.status(400).send("user not found!");
  }
  const { name, email, phone, password, course } = req.body;
  if (!name || !email || !phone || !password || !course) {
    return res.status(400).send("please fill the field!");
  }
  try {
    const UsData = await Userdata.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        password,
        course,
      },
      {
        new: true,
      }
    );
    res.status(201).send(UsData);
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const Udata = await Userdata.findById(id);
  if (!Udata) {
    return res.status(400).send("user not found!");
  }
  try {
    const UsData = await Userdata.deleteOne(Udata);
    res.status(201).send(UsData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  allUser,
  User,
  postUser,
  updateUser,
  deleteUser,
};
