import Contact from "../models/Contact.model.js";
import {
  sendContactNotification,
  sendAutoReply,
} from "../services/email.service.js";

export const createContact = async (req, res) => {
  try {
    const { fullName, phone, email, subject, message } = req.body;

    if (!fullName || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const contact = await Contact.create({
      fullName,
      phone,
      email,
      subject,
      message,
    });

    // Wait for emails (testing)
    const ownerMail = await sendContactNotification(contact);
    console.log("✅ Owner Mail:", ownerMail.messageId);

    const customerMail = await sendAutoReply({
      fullName,
      email,
    });
    console.log("✅ Customer Mail:", customerMail.messageId);

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: contact,
    });

  } catch (error) {
    console.error("Create Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};