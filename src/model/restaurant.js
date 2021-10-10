const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const RestaurantModel = new Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String },
  rating: { type: Number },
  geometry: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
  comments: { type: [mongoose.Types.ObjectId], ref: "Comment" },
});

module.exports = mongoose.model("Restaurant", RestaurantModel);
