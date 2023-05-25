const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const { galleryRouter } = require("./api");

app.use(cors());

app.use("/", galleryRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});