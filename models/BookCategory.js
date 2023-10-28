import mongoose from "mongoose";
import { Schema } from "mongoose";
const categorySchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        slug: String,
        desc: {
            type: String,
            default: "",
        },
        books: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Book",
            default: [],
        },
    },
    {
        timestamps: true,
    }
);
categorySchema.statics = {
    findByName: function (name) {
        return this.find({ name: new RegExp(name, "i") });
    },
    findOneById: function (id) {
        return this.findOne({ _id: id });
    },
};
categorySchema.query = {
    findEmptyDesc: function () {
        return this.where({ desc: "" });
    },
    updateEmptyFeilds: function (value) {
        return this.updateMany({ desc: value });
    },
};
categorySchema.methods = {};

export const Category = mongoose.model("Category", categorySchema);
