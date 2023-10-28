import express from "express";
import {
    createCategory,
    getAllCategory,
    getSingleCategoryWithId,
    getSingleCategoryWithName,
} from "../controllers/bookCategoryController.js";

const bookCategoryRouter = express.Router();

bookCategoryRouter.post("/", createCategory);
bookCategoryRouter.get("/", getAllCategory);
bookCategoryRouter.get("/:id", getSingleCategoryWithId);
bookCategoryRouter.get("/find/:name", getSingleCategoryWithName);

export default bookCategoryRouter;
