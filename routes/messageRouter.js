const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.get("/", messageController.getAllMessageGet);
router.get("/new", messageController.getFormGet);
router.post("/new", messageController.getFormPost);
router.get("/message/:id", messageController.getMessageGet);

module.exports = router;
