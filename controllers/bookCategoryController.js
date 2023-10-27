import { createSlug } from "../helpers/createSlug.js";
import { Category } from "../models/BookCategory.js";

export const createCategory = async (req, res) => {
    try {
        const slug = createSlug(req.body.name);
        const data = await new Category({ ...req.body, slug });
        data.save();
        res.status(200).send({
            message: "Category saved successfully",
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: "Category save failed",
            error: err.message,
        });
    }
};
