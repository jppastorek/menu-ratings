const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');


let db = new sqlite3.Database(
  "./restaurant.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successfully connected to the restaurant sqlite database!");
  }
);

fs.readFile('./db_create_tables.sql', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  db.exec(data);
})

db.close((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Closed the database connection.");
});
