const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentModel = new Schema({
  name: { type: String, required: true },
  commentText: { type: String, required: true },
});

module.exports = mongoose.model("Comment", CommentModel);
