import mongoose from "mongoose";

const writerSchema = mongoose.Schema(
    {
        name: {
            type: "String",
            required: true,
            trim: true,
        },
        title: {
            type: "String",
            trim: true,
        },
        writerPhoto: {
            type: "String",
            trim: true,
            default: "avater.png",
        },
        period: {
            type: "String",
            trim: true,
        },
        bio: {
            type: "String",
            maxlength: 100,
        },
        books: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Book",
            default: [],
        },
        status: {
            type: "Boolean",
            enum: ["true", "false"],
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Writer = mongoose.model("Writer", writerSchema);
