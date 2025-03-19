import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        maxLength: 100,
    },
    categoryDescription: {
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

export default model("Category", categorySchema);
