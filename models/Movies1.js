import mongoose from "mongoose";

//Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

//creating model
const MovieModel = mongoose.model("Movie", movieSchema); //Movie => movies

const insertManyDoc = async () => {
  try {
    //Creating new document
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m2 = new MovieModel({
      name: "John Wick",
      ratings: 3,
      money: 60000,
      genre: ["action", "adventure", "spy"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m3 = new MovieModel({
      name: "Godzilla",
      ratings: 3,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m4 = new MovieModel({
      name: "King kong",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m5 = new MovieModel({
      name: "Harry Potter",
      ratings: 5,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m6 = new MovieModel({
      name: "Super Man",
      ratings: 1,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });

    const result = await MovieModel.insertMany([m1,m2,m3,m4,m5,m6]);
    console.log(result);
    
  } catch (error) {
    console.log(error);
  }
};

export {insertManyDoc};
