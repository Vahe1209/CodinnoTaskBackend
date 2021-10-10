const CommentModel = require("../model/comment");
const RestaurantModel = require("../model/restaurant");
const mongoose = require("mongoose");
const CommentController = {
  async saveComments(req, res, next) {
    const { author, text, restaurantId } = req.body;
    const newComment = new CommentModel({
      name: author,
      commentText: text,
    });
    const { _id } = await newComment.save();
    let restaurant = await RestaurantModel.findById(
      mongoose.Types.ObjectId(restaurantId)
    );
    restaurant.comments.push(_id);
    await restaurant.save();
    return res.json({
      error: false,
      message: "Comment inserted successfully!",
    });
  },
};

module.exports = CommentController;
