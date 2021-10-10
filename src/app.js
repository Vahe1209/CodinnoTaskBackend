const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
const data = require("../data.json");
require("./config/db.js");
const RestaurantController = require("./controller/restaurant");
const CommentController = require("./controller/comment");
const RestaurantModel = require("./model/restaurant");
// const mongoose = require("mongoose");

// data.restaurants.map(async (item) => {
//   const restaurant = new RestaurantModel({
//     name: item.name,
//     image: item.image,
//     description: item.description,
//     rating: item.rating,
//     geometry: {
//       latitude: item.geometry[0],
//       longitude: item.geometry[1],
//     },
//     comment: [],
//   });
//   await restaurant.save();
// });
app.use(express.json());
app.get("/getRestaurants", RestaurantController.getRestaurants);
app.post("/setComment", CommentController.saveComments);
app.post("/getRestaurantById", RestaurantController.getRestaurantById);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
