import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full Name is required"],
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


        service: {
            type: String,
            required: [true, "Service is required"],
            trim: true,
        },

        location: {
            type: String,
            required: [true, "Location is required"],
            trim: true,
        },

        dimensions: {
            type: String,
            default: "",
            trim: true,
        },

        material: {
            type: String,
            default: "",
            trim: true,
        },

        contactMethod: {
            type: String,
            enum: ["phone", "whatsapp", "email"],
            default: "phone",
        },

        description: {
            type: String,
            required: [true, "Project description is required"],
            trim: true,
        },

        images: [
            {
                url: {
                    type: String,
                    required: true,
                },

                public_id: {
                    type: String,
                    required: true,
                },
            },
        ],

        status: {
            type: String,
            enum: [
                "Pending",
                "In Progress",
                "Completed",
                "Cancelled",
            ],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;