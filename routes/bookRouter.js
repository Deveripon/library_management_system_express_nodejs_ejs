import express from "express";
import {
    createBook,
    deleteAllBook,
    deleteSingleBookBySlug,
    getAllBooks,
    getSingleBook,
    updateSingleBook,
} from "../controllers/bookController.js";
import { bookCoverUplaod } from "../utils/multer.js";

const bookRouter = express.Router();

bookRouter.post("/create", bookCoverUplaod, createBook);
bookRouter.patch("/edit/:slug", bookCoverUplaod, updateSingleBook);
bookRouter.get("/view/:slug", getSingleBook);
bookRouter.get("/", getAllBooks);
bookRouter.delete("/delete/:slug", deleteSingleBookBySlug);
bookRouter.delete("/delete-all", deleteAllBook);

export default bookRouter;
