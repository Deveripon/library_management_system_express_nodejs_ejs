import mongoose from "mongoose";

const bookDataSchema = mongoose.Schema(
    {
        title: {
            type: "String",
            required: [true, "Book Title is required"],
            trim: true,
        },
        slug: {
            type: "String",
        },
        writer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Writer",
            required: [true, "Book Writer is required"],
            trim: true,
        },
        translated_by: {
            type: "String",
        },
        first_published: {
            type: "String",
        },
        coverPhoto: {
            type: "String",
            trim: true,
            default: "book.jpg",
            required: true,
        },
        photoPublicID: {
            type: "String",
            trim: true,
        },
        status: {
            type: "Boolean",
            enum: [true, false],
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model("Book", bookDataSchema);
