import express from "express";
import {
    createWriter,
    deleteWriterById,
    getAllWriters,
    getSingleWriterById,
    updateWriterById,
} from "../controllers/writerController.js";
import { writerPhotoUpload } from "../utils/multer.js";

const writerRouter = express.Router();

writerRouter.post("/create", writerPhotoUpload, createWriter);
writerRouter.get("/view/:id", getSingleWriterById);
writerRouter.get("/", getAllWriters);
writerRouter.patch("/edit/:id", writerPhotoUpload, updateWriterById);
writerRouter.delete("/delete/:id", deleteWriterById);

export default writerRouter;
