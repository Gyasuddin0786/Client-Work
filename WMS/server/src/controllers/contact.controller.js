import Contact from "../models/Contact.model.js";

import {
    sendContactNotification,
    sendAutoReply,
} from "../services/email.service.js";

export const createContact = async (req, res) => {
    try {
        const {
            fullName,
            phone,
            email,
            subject,
            message,
        } = req.body;

        // Validation
        if (!fullName || !phone || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        // Save in MongoDB
        const contact = await Contact.create({
            fullName,
            phone,
            email,
            subject,
            message,
        });

        // Send notification to company
        try {
            await sendContactNotification(contact);
        } catch (error) {
            console.error("Company Email Error:", error.message);
        }

        // Send auto reply to customer
        try {
            await sendAutoReply({
                fullName,
                email,
            });
        } catch (error) {
            console.error("Auto Reply Error:", error.message);
        }

        return res.status(201).json({
            success: true,
            message: "Your enquiry has been submitted successfully.",
            data: contact,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }
};