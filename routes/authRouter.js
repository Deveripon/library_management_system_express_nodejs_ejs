import express from "express";
import { getLogin } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", getLogin);

export default authRouter;
