import { Book } from "../models/Book.js";

export const createBook = async (req, res) => {
    await Book.create({ ...req.body });
    await res.status(201).send({
        status: 201,
        message: "Book created successfully",
        data: { ...req.body },
    });
};
