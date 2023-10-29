import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        cell: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ["male", "female"],
        },
        status: {
            type: Boolean,
            enum: [true, false],
            default: true,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);
