const path = require("node:path");
const express = require("express");
const app = express();
const createMessage = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", createMessage);

const PORT = 8080;

app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
