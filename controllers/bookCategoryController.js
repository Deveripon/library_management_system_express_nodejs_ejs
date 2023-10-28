import { createSlug } from "../helpers/createSlug.js";
import { Category } from "../models/BookCategory.js";

export const createCategory = async (req, res) => {
    try {
        const { name, desc, books } = req.body;
        const findCategory = await Category.findOne({ name: req.body.name });
        if (findCategory) {
            return res.status(200).send({
                message: `${name} already exists`,
            });
        }
        const slug = createSlug(req.body.name);
        const data = new Category({ name, slug, desc, books });
        await data.save();
        res.status(200).send({
            message: `${name} Saved successfully`,
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: "Category save failed",
            error: err.message,
        });
    }
};

export const getAllCategory = async (req, res) => {
    try {
        const data = await Category.find().findEmptyDesc();
        if (data.length > 0) {
            res.status(200).json({
                message: data.length + " Category Found",
                data: data,
            });
        } else {
            res.status(404).json({
                message: "NO Category Found",
                data: data,
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

export const getSingleCategoryWithId = async (req, res) => {
    try {
        const data = await Category.findOneById(req.params.id);
        res.status(200).send({
            data: data,
        });
    } catch (err) {
        res.status(500).send({
            error: err.message,
        });
    }
};

export const getSingleCategoryWithName = async (req, res) => {
    try {
        const data = await Category.findByName(req.params.name);
        if (data.length === 0) {
            return res.status(404).send({
                message: `No category found`,
            });
        }
        res.status(200).json({
            message: data.length + " Category found",
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};
