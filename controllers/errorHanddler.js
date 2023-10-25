import mongoose from "mongoose";
export const __404Error = (req, res) => {
    res.status(404).send({
        status: 404,
        message: "404 Not Found",
    });
};
export const __applicationError = (err, req, res, next) => {
    if (err.message) {
        res.status(500).send({
            status: 500,
            message: err.message,
        });
    } else {
        res.status(500).send({
            status: 500,
            message: "There was an error processing your request",
        });
    }
};
