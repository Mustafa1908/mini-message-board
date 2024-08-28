const db = require("../db/queries");

async function getAllMessageGet(req, res) {
  let messagesData = await db.getAllMessages();
  res.render("index", { message: messagesData });
}

async function getFormGet(req, res) {
  res.render("new");
}

async function getFormPost(req, res) {
  await db.insertNewMessage([
    req.body.messageText,
    req.body.messageUser,
    new Date(),
  ]);
  res.redirect("/");
}

async function getMessageGet(req, res) {
  let messagesData = await db.getAllMessages();
  res.render("message", { message: messagesData, messageIndex: req.params.id });
}

module.exports = {
  getAllMessageGet,
  getFormGet,
  getFormPost,
  getMessageGet,
};
