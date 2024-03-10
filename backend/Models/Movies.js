const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    // Storing Images in mongodb:
    poster: { type: String },
    logo: { type: String },
    backdrop: { type: String },
    // Storing Videos in mongodb
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genres: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
