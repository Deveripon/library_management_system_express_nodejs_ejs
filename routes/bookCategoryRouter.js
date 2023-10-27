import express from "express";
import { createCategory } from "../controllers/bookCategoryController.js";

const bookCategoryRouter = express.Router();

bookCategoryRouter.post("/", createCategory);

export default bookCategoryRouter;
