//load dependencies
import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { __404Error, __applicationError } from "./controllers/errorHanddler.js";
import publicRouter from "./routes/publicRouter.js";
import bookRouter from "./routes/bookRouter.js";
import multer from "multer";
import { coonectToMongoDB } from "./config/mongodb.js";

//load environment variables
dotenv.config();
const PORT = process.env.PORT || 6060;
//initialize express app
const app = express();

//add express support middleware
app.use(express.static(path.resolve("public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//applications default routes
app.use(publicRouter);
app.use("/books", bookRouter);

//use error handler
app.use(__404Error);
app.use(__applicationError);

// server listen on port
app.listen(PORT, () => {
    coonectToMongoDB();
    console.log(` server listening on port ${PORT} `.bgGreen.blue.bold);
});
