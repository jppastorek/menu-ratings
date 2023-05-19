import sqlite3 from "sqlite3";
import { open } from "sqlite";
sqlite3.verbose();

export default class User {
  constructor(db) {
    this.db = db;
  }

  async openDB(file) {
    return open({
      filename: `${file}`,
      driver: sqlite3.Database,
    });
  }

  async addNewUser(firstName, lastName, email, password, residence) {
    const db = await this.openDB(this.db);
    const result = await db.run(`
      INSERT INTO users (first_name, last_name, email, password, residence)
      VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${residence}');
      `);
    await db.close();
    return result;
  }
}
