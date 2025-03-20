/*Campos:
    idCategory
    idBrand
    productName
    productDescription
    stock
    color
    img
    price
*/

import { Schema, model } from "mongoose";

const productsSchema = new Schema ({
    idCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    idBrand: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true,
        maxLength: 500
    },
    stock: {
        type: Number,
        required: true,
        minimum: 0
    },
    color: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Products", productsSchema);