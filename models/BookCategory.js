import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    slug: String,
    desc: String,
    books: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Book",
        default: [],
    },
});

export const Category = mongoose.model("Category", categorySchema);
