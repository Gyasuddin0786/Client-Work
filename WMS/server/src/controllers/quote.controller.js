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

    // Validation
    if (
      !fullName ||
      !phone ||
      !email ||
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

    if (req.files?.length) {
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

    // Send Response Immediately
    res.status(201).json({
      success: true,
      message: "Quote request submitted successfully.",
      data: quote,
    });

    // Background Email to Owner
    sendQuoteNotification(quote).catch((error) => {
      console.error(
        "Quote Notification Error:",
        error.message
      );
    });

    // Background Auto Reply
    sendAutoReply({
      fullName,
      email,
    }).catch((error) => {
      console.error(
        "Auto Reply Error:",
        error.message
      );
    });

  } catch (error) {
    console.error("Create Quote Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};