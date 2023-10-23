import express from "express";

const publicRouter = express.Router();

publicRouter.route("/").all((req, res) => {
    res.status(200).send({
        status: "OK",
        message: "Welcome to our library management system",
    });
});

export default publicRouter;
