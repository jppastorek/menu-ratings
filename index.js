import User from "./User.js";
import Ratings from "./Ratings.js";
import Item from "./Item.js";
const db = "./restaurant.db";

const userController = new User(db);
const ratingController = new Ratings(db);
const itemController = new Item(db);

// let newUser = await userController.addNewUser(
//   "Ringo",
//   "Starr",
//   "rstarr@gmail.com",
//   "beatlefanboy123",
//   "Liverpool"
// );

// console.log(newUser.lastID);

let newRating = await ratingController.addRating(
'6', '5', 1, 'dis ish is nasty!', Date.now()
);

let newRating2 = await ratingController.addRating(
    '13', '5', 2, 'its really ok...', Date.now()
    );


// console.log(newRating);

// console.log(await ratingController.getRating('1'));

// await ratingController.deleteRating('2');


let averageRating = await itemController.getAverageRating('5');

console.log(averageRating);