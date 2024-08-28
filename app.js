require("dotenv").config();

const path = require("node:path");
const express = require("express");
const app = express();
const messagesRouter = require("./routes/messageRouter");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
