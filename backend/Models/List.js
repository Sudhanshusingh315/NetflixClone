const mongoose = require("mongoose");
const { Schema } = mongoose;

const listSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genres: { type: String },
    content: { type: Array },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
