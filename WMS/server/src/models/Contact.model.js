import mongoose from "mongoose";
const contactSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, 'FullName is required'],
            trim: true,
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
        },


        subject: {
            type: String,
            trim: true,
            default: "",
        },

        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    });
const contact = mongoose.model('Contact', contactSchema)
export default contact;