import Quote from "../models/Quote.model.js";
import uploadToCloudinary from "../utils/cloudinaryUpload.js";
import {
    sendQuoteNotification,
    sendAutoReply,
} from "../services/email.service.js";

export const createQuote = async (req, res) => {
    try {
        const {
            fullName,
            phone,
            email,
            service,
            location,
            dimensions,
            material,
            contactMethod,
            description,
        } = req.body;

        // Required field validation
        if (
            !fullName ||
            !email ||
            !phone ||
            !service ||
            !location ||
            !description
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        // Upload Images
        let uploadedImages = [];

        if (req.files && req.files.length > 0) {
            uploadedImages = await Promise.all(
                req.files.map((file) =>
                    uploadToCloudinary(file.buffer)
                )
            );
        }

        // Save Quote
        const quote = await Quote.create({
            fullName,
            phone,
            email,
            service,
            location,
            dimensions,
            material,
            contactMethod,
            description,
            images: uploadedImages,
        });

        // Company Notification
        try {
            await sendQuoteNotification(quote);
        } catch (error) {
            console.error("Quote notification email failed:", error.message);
        }

        // Customer Auto Reply
        try {
            await sendAutoReply({
                fullName,
                email,
            });
        } catch (error) {
            console.error("Auto reply email failed:", error.message);
        }

        return res.status(201).json({
            success: true,
            message: "Quote request submitted successfully.",
            data: quote,
        });

    } catch (error) {
        console.error("Create Quote Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};