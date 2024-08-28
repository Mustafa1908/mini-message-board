const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertNewMessage(message) {
  await pool.query(
    "INSERT INTO messages (message, author, date) VALUES ($1, $2, $3)",
    [message[0], message[1], message[2]]
  );
}

module.exports = {
  getAllMessages,
  insertNewMessage,
};
