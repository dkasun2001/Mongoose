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

/* const allDoc = async () => {
  try {
    const result = await MovieModel.find(); // All doc
    // console.log(result);

    // Iterating Over
    result.forEach((movie) => {
      console.log(movie.name);
    });

  } catch (error) {
    console.log(error);
  }
}; */

const singleDoc = async () => {
  try {
    // const result = await MovieModel.findById(); // All doc
    // const result = await MovieModel.findById("66881aab927a41aaa565b3b9");
    /*  const result = await MovieModel.findById(
      "66881aab927a41aaa565b3b9",
      "name"
    ); */

    // const result = await MovieModel.find({ name: "John Wick" });
    // const result = await MovieModel.find().limit(3);
    // const result = await MovieModel.find().skip(2);
    // const result = await MovieModel.find().countDocuments();
    const result = await MovieModel.find().sort({ name: -1 });
    console.clear();
    console.log(result);
    // console.log(result.name);
    // console.log(result.ratings);
  } catch (error) {
    console.log(error);
  }
};

export { singleDoc };
