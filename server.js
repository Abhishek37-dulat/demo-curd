const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/userRoute.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MD;

app.use(express.json());
app.use(cors());
app.use("/", userRoute);

mongoose.connect(MONGO_URI);

app.listen(PORT, () => {
  console.log("listening to port: ", PORT);
});
