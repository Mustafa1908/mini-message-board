const express = require("express");
const router = express.Router();

let messages = [];

router.get("/", (req, res) => {
  res.render("index", { message: messages });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
