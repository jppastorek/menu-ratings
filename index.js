import User from "./User.js";
import Ratings from "./Ratings.js";
import Item from "./Item.js";
import express from "express";
const port = 3000;
const db = "./restaurant.db";
const userController = new User(db);
const ratingController = new Ratings(db);
const itemController = new Item(db);
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json());
const jsonParser = bodyParser.json();
const index = "/home/jp/WebDev/menu-ratings/index.html";
app.use(express.static("/home/jp/WebDev/menu-ratings"));

app.get("/", (req, res) => {
  res.sendFile(index);
});

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

//GET RATING
app.get("/api/rating/:id", async (req, res) => {
  res.send(await ratingController.getRating(req.params["id"]));
});

//POST RATING
app.post("/api/rating", jsonParser, async (req, res) => {
  let date = new Date();
  let id = ratingController.addRating(
    req.body.user_id,
    req.body.item_id,
    req.body.rating,
    req.body.comment,
    date
  );
  res.send(`Successfully added rating at ${date}.`);
});

//DELETE RATING
app.delete("/api/rating/:id", async (req, res) => {
  res.send(await ratingController.deleteRating(req.params["id"]));
});

//-----------------------------------LISTEN------------------------------

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
