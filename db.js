const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./padhoai.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      isPremium INTEGER DEFAULT 0
    )
  `);
});

module.exports = db;
