import { Schema, model } from "mongoose";

const contactFormSchema = new Schema({
    email: {
        type: String,
        required: true,
        maxLength: 100,
    },
    description: {
        type: String,
        required: true,
        maxLength: 500,
    },
}, 
{
    timestamps: true,
    strict: true,
}
);

export default model("ContactForm", contactFormSchema);