/* install express, mongoose, nodemon,  dotenv
    (npm i express mongoose nodemon dotenv)

    "dev": "nodemon index.js"
 */

import express from "express";
// import { allDoc } from "./models/Movies.js";
import { updateById } from "./models/Movies.js";
import connectDB from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);
// allDoc();
// singleDoc();
updateById("John Wick");

app.listen(port, () => console.log(`Server listening on port ${port}`));
