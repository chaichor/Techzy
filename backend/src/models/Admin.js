import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 100,
    },
    phoneNumber: {
        type: String,
        required: true,
        maxLength: 15,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
}, 
{
    timestamps: true,
    strict: true,
}
);

export default model("Admin", adminSchema);
