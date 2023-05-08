const sqlite3 = require("sqlite3").verbose();

class User {
  constructor(db) {
    this.db = db;
  }

  addNewUser(firstName, lastName, email, password, residence) {
    var lastID;
    let db = new sqlite3.Database(
      `${this.db}`,
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          return console.error(err);
        }
        db.run(
          `
            INSERT INTO
                users (first_name, last_name, email, password, residence)
            VALUES
                (
                    '${firstName}', '${lastName}', '${email}', '${password}', '${residence}'
                );
        `,
          function(err) {
            if (err) {
              console.log(err);
            }
            console.log(`inserted ${this.lastID}`);
            lastID = this.lastID;
            db.close((err) => {
              if (err) {
                console.log(err.message);
              }
              console.log(`closed ${this.lastID}`);
            });
          }
        );
      }
    );
    return lastID;
  }
}

module.exports = User;
