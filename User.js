import sqlite3 from "sqlite3";
import { open } from "sqlite";
sqlite3.verbose();


export default class User {
  constructor(db) {
    this.db = db;
  }

  async openDB() {
    return open({
      filename: "./restaurant.db",
      driver: sqlite3.Database,
    });
  }

  async addNewUser(firstName, lastName, email, password, residence) {
    const db = this.openDB();
    console.log(db);
    const result = await db.run(`
      INSERT INTO users (first_name, last_name, email, password, residence)
      VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${residence}');
      `);
    return result;
  }
}

// addNewUser(firstName, lastName, email, password, residence) {
//   let db = new sqlite3.Database(
//     `${this.db}`,
//     sqlite3.OPEN_READWRITE,
//     (err) => {
//       if (err) {
//         return console.error(err);
//       }
//       db.get(
//         `
//           INSERT INTO
//               users (first_name, last_name, email, password, residence)
//           VALUES
//               (
//                   '${firstName}', '${lastName}', '${email}', '${password}', '${residence}'
//               ) RETURNING *;
//       `,
//         (err, row) => {
//           if (err) {
//             console.log(err);
//           }
//           console.log(`inserted ${row}`);
//           this.lastID = row;
//           db.close((err) => {
//             if (err) {
//               console.log(err.message);
//             }
//             console.log(`closed ${row}`);
//           });
//         }
//       );
//     }
//   );
// }

// module.exports = User;
