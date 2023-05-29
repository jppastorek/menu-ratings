import User from "./User.js";
import Ratings from "./Ratings.js";
import Item from "./Item.js";
import express from "express";
import * as path from "path";
const port = 3000;
const db = "./restaurant.db";
const userController = new User(db);
const ratingController = new Ratings(db);
const itemController = new Item(db);
const app = express();
import * as http from "http";
import bodyParser from "body-parser";
app.use(bodyParser.json());
const jsonParser = bodyParser.json();


//-----------------------------------USER---------------------------------

//GET USER
app.get("/api/user/:id", async (req, res) => {
  res.send(await userController.getUser(req.params["id"]));
});

//POST USER
app.post("/api/user", jsonParser, async (req, res) => {
  let id = userController.addNewUser(
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,
    req.body.residence
  );
  res.send(
    `Successfully added ${req.body.first_name} ${req.body.last_name} at ID ${
      (await id).lastID
    }.`
  );
});

//DELETE USER
app.delete("/api/user/:id", async (req, res) => {
  res.send(await userController.deleteUser(req.params["id"]));
});


//------------------------------------RATING-----------------------------


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
