const path = require("node:path");
const express = require("express");
const app = express();
const createMessage = require("./routes/index");
const assetsPath = path.join(__dirname, "public/css");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", createMessage);

const PORT = 8080;

app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
