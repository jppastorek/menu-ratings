import sqlite3 from "sqlite3";
import { open } from "sqlite";
sqlite3.verbose();

//TODO ----------Need to add a column for a timestamp of when user was created so i can have a history

export default class User {
  constructor(db) {
    this.db = db;
  }

  async openDB() {
    return open({
      filename: `${this.db}`,
      driver: sqlite3.Database,
    });
  }

  async addNewUser(firstName, lastName, email, password, residence) {
    const db = await this.openDB();
    const result = await db.run(`
      INSERT INTO users (first_name, last_name, email, password, residence)
      VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${residence}');
      `);
    await db.close();
    return result;
  }

  async getUser(user_id) {
    let db = await this.openDB();
    const result = await db.get(`
      SELECT *
      FROM users
      WHERE user_id = '${user_id}'
    `);
    return result;
  }

  async updateUser(user_id, firstName, lastName, email, password, residence) {
    let db = await this.openDB();
    const result = await db.run(`
      UPDATE users
      SET first_name = '${firstName}', last_name = '${lastName}', email = '${email}', password = '${password}', residence = '${residence}'
      WHERE user_id = '${user_id};
    `);
    await db.close();
    return result;
  }

  async deleteUser(user_id) {
    let db = await this.openDB();
    await db.run(`
      DELETE FROM users WHERE user_id = '${user_id}';
    `);
    await db.close();
  }
}
