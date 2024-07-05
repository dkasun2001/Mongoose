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

const updateById = async (name) => {
  try {
    // const result = await MovieModel.updateOne({ _id: id }, { name: "Dinusha" });
    // const result = await MovieModel.findByIdAndDelete(id);
    // const result = await MovieModel.deleteOne({ name });
    const result = await MovieModel.deleteMany({ name: "" });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { updateById };
