import sqlite3 from "sqlite3";
import { open } from "sqlite";
sqlite3.verbose();


export default class Restaurant {
    constructor(db) {
        this.db = db;
    }

    addNewRestaurant(restaurant_name, restaurant_location, phone, website, cuisine, ) {

    }
}

