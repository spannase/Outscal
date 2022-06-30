const express = require("express");
const app = express();

const dotenv = require("dotenv");
require("dotenv").config();

const connectdb = require("./config/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const dataController = require("./controller/data.controller");
app.use("/products", dataController);

module.exports = app;

app.listen(process.env.PORT || 5000, async () => {
  try {
    await connectdb();
    console.log("Server Connected Succes");
  } catch (error) {
    console.log(error);
  }
});
