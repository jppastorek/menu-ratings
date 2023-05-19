import User from "./User.js";
import Ratings from "./Ratings.js";
const db = "./restaurant.db"

const userController = new User(db);
const ratingController = new Ratings(db);

// let newUser = await userController.addNewUser(
//   "Ringo",
//   "Starr",
//   "rstarr@gmail.com",
//   "beatlefanboy123",
//   "Liverpool"
// );

// console.log(newUser.lastID);

// let newRating = await ratingController.addRating(
// '1', '1', 5, 'Turtle soup is effin delish!', Date.now()
// );

// console.log(newRating);

// console.log(await ratingController.getRating('1'));

// await ratingController.deleteRating('2');