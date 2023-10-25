import { Writer } from "../models/Writer.js";
import { cloudUploader } from "../utils/cloudinary.js";

//this function will create a writer
export const createWriter = async (req, res) => {
    const writerPhoto = await cloudUploader(req.file.path, "writer");
    const data = await Writer.create({
        ...req.body,
        writerPhoto: writerPhoto.secureUrl,
        writerPhotoId: writerPhoto.publicID,
    });
    // const data = await Writer.create({
    //     name: "nirmolenddu gun",
    //     title: "a pioneer of bangla ",
    //     period: "1999-2012,",
    //     bio: "lorem impum",
    //     books: ["653912205cce9a3e92eef258", "653912135cce9a3e92eef256", "653912915cce9a3e92eef261"],
    // });
    await res.status(201).send({
        status: 201,
        message: "Writer created successfully",
        data,
    });
};

//this function will find a single writer by id
export const getSingleWriterById = async (req, res) => {
    const data = await Writer.findById(req.params.id).populate("books");
    await res.status(200).send({
        status: 200,
        message: "Writer Found",
        data,
    });
};

//this function will find all the writers
export const getAllWriters = async (req, res) => {
    const data = await Writer.find({}).populate("books");
    await res.status(200).send({
        status: 200,
        message: `${data.length} Writer Found`,
        data: data,
    });
};

//this function will update the writer data by id

export const updateWriterById = async (req, res) => {
    const data = await Writer.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
    await res.status(200).send({
        status: 200,
        message: "Writer updated",
        data: data,
    });
};

//this function will delete the writer data by id
export const deleteWriterById = async (req, res) => {
    const data = await Writer.findByIdAndDelete(req.params.id);
    await res.status(200).send({
        status: 200,
        message: "Writer deleted",
        data: data,
    });
};
