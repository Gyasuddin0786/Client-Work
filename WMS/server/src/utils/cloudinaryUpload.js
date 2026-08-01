import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (buffer, folder = "strongweld") => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder,
            },
            (error, result) => {
                if (error) {
                    return reject(error);
                }

                resolve({
                    url: result.secure_url,
                    public_id: result.public_id,
                });
            }
        );

        Readable.from(buffer).pipe(uploadStream);
    });
};

export default uploadToCloudinary;