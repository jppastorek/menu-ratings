const sqlite3 = require("sqlite3").verbose();

export default class User {
  constructor(db) {
    db = this.db;
  }

  addNewUser(firstName, lastName, email, password, residence) {
    let db = new Database(`${this.db}`, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        return console.error(err.message);
      }
      db.exec(
        `
            INSERT INTO
                users (first_name, last_name, email, password, residence)
            VALUES
                (
                    ${firstName}, ${lastName}, ${email}, ${password}, ${residence}
                );
        `,
        (err) => {
          if (err) {
            console.log(err.message);
          }
          db.close((err) => {
            if (err) {
              console.log(err.message);
            }
          });
        }
      );
    });
  }
}
