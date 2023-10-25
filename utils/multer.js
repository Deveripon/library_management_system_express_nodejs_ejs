import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     if (file.fieldname === "coverPhoto") {
    //         cb(null, path.resolve("public/assets/img/coverphoto"));
    //     }
    // },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        let fileName =
            file.originalname.replace(extname, "").split(" ").join("_").toLowerCase() +
            "_" +
            Date.now() +
            "_" +
            Math.floor(Math.random() * 1000) +
            extname;
        cb(null, fileName);
    },
});

export const bookCoverUplaod = multer({
    storage: storage,
    limits: 1024 * 1024 * 4, //4 mb
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/webp"
        ) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    `invalid file: ${file.mimetype} is not supported use (JPG, PNG,JPEG,WEBP)`
                )
            );
        }
    },
}).single("coverPhoto");
export const writerPhotoUpload = multer({
    storage: storage,
    limits: 1024 * 1024 * 4, //4 mb
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/webp"
        ) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    `invalid file: ${file.mimetype} is not supported use (JPG, PNG,JPEG,WEBP)`
                )
            );
        }
    },
}).single("writerPhoto");
