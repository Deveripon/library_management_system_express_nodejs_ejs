import express from "express";
import { addUser, getAllUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/add-user", addUser);
userRouter.get("/", getAllUser);

export default userRouter;

