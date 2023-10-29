import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const getLogin = async (req, res) => {
    try {
        if (!req.body.userInfo || !req.body.password) {
            return res.status(403).json({ error: "All credentials required" });
        }
    } catch (err) {}
};
