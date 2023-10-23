import express from "express";
import { createBook } from "../controllers/bookController.js";
import { bookCoverUplaod } from "../utils/multer.js";

const bookRouter = express.Router();
bookRouter.post("/", bookCoverUplaod, createBook);

export default bookRouter;
 