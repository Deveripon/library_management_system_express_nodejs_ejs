import mongoose from "mongoose";

const bookDataSchema = mongoose.Schema({
    title: {
        type: "String",
        required: [true, "Book Title is required"],
        trim: true,
        index: true,
        uppercase: true,
        minlength: 4,
        maxlength: 20,
    },
    writer: {
        type: "String",
        required: [true, "Book Writer is required"],
        trim: true,
        immutable: true,
    },
    translated_by: {
        type: "String",
    },
    first_published: {
        type: "String",
        required: [true, "Published Date is required"],
    },
    qty: {
        type: "Number",
        min: [6, "Minimun 6 is required"],
        max: [100, "Maximun 100 is Allowed"],
    },
    status: {
        type: "Boolean",
        enum: [true, false],
        default: true,
    },
    coverPhoto: {
        type: "String",
        trim: true,
        default: "",
    },
});

export const Book = mongoose.model("Book", bookDataSchema);
