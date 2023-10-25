import { Book } from "../models/Book.js";
import mongoose from "mongoose";
import { cloudUploader, destroyFromCloud } from "../utils/cloudinary.js";
import { createSlug } from "../helpers/createSlug.js";

//this function will create a new book and book cover will upload to the cloud
export const createBook = async (req, res) => {
    try {
        let coverPhoto = await cloudUploader(req.file.path, "books");

        const data = await Book.create({
            ...req.body,
            slug: createSlug(req.body.title),
            coverPhoto: coverPhoto.secureUrl,
            photoPublicID: coverPhoto.publicID,
        });
        await res.status(201).send({
            status: 201,
            message: "Book created successfully",
            data,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            // Handle Mongoose validation error
            const customErrors = {};

            for (let field in error.errors) {
                customErrors[field] = error.errors[field].message;
            }
            console.log("Custom validation errors:", customErrors);
            res.status(500).send(customErrors);
        }
    }
};

//this function will fatch all books
export const getAllBooks = async (req, res) => {
    const data = await Book.find().populate("writer");
    res.status(200).json({
        status: 200,
        message: `${data.length} books found`,
        dataCount: data.length,
        data: data,
    });
};

//this function will fetch single book with slug
export const getSingleBook = async (req, res) => {
    const data = await Book.findOne({ slug: req.params.slug }).populate("writer");
    res.status(200).json({
        status: 200,
        message: "books found",
        data: data,
    });
};

//this function will update single book with slug
export const updateSingleBook = async (req, res) => {
    // const previousData = await Book.findOne({ slug: req.params.slug });
    // let photo = previousData.coverPhoto;
    // if (req?.file?.path) {
    //     photo = req.file.path;
    // }
    // let coverPhoto = await cloudUploader(photo, "books");

    const data = await Book.updateOne(
        { slug: req.params.slug },
        { $set: { ...req.body } },
        { new: true }
    );
    await res.status(200).json({
        status: 200,
        message: "books Updated",
        data,
    });
};

//this function will delete a single book with photo from cloud
export const deleteSingleBookBySlug = async (req, res) => {
    const previousData = await Book.findOne({ slug: req.params.slug });
    await destroyFromCloud(previousData.photoPublicID);
    const data = await Book.deleteOne({ slug: req.params.slug });
    await res.status(200).json({
        status: 200,
        message: "books deleted successfully",
        data: data,
    });
};

//this function will delete all Book and also delete photo from cloud
export const deleteAllBook = async (req, res) => {
    const previousData = await Book.find({});
    await previousData.map((item) => {
        destroyFromCloud(item.photoPublicID);
    });
    const data = await Book.deleteMany({});
    res.status(200).json({
        status: 200,
        message: "All books deleted successfully",
        data,
    });
};
