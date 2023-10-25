import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

export const cloudUploader = async (path, folder) => {
    const filedata = await cloudinary.uploader.upload(
        path,
        {
            publicid: Date.now() + "_" + Math.floor(Math.random() * 100000),
            folder: folder,
        },
        (err, res) => {
            if (err) throw err;
        }
    );
    return {
        secureUrl: filedata.secure_url,
        publicID: filedata.public_id,
    };
};
export const destroyFromCloud = async (publicID) => {
    const deleteFile = await cloudinary.uploader.destroy(publicID, (err, res) => {
        if (err) throw err;
    });
    return deleteFile;
};
