import { User } from "../models/User.js";
import bcrypt from "bcrypt";

//create user

export const addUser = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const data = new User({ ...req.body, password: hashPassword });
        await data.save();
        res.status(201).json({
            message: "User added successfully",
            data,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const data = await User.find();
        if (data.length > 0) {
            res.status(200).json({
                message: data.length + " Users Found",
                data,
            });
        } else {
            res.status(404).json({
                message: "No users found",
            });
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
        });
    }
};
