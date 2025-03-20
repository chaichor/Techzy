/*Campos:
    idProduct
    idUser
    amount
    total
*/

import { Schema, model } from "mongoose";

const shoppingCartSchema = new Schema ({
    idProduct: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },
    idUser: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    amount: {
        type: Number,
        required: true,
        minimum: 1
    },
    total: {
        type: Number,
        required: true,
        minimum: 0
    }
}, {
    timestamps: true,
    strict: false
})

export default model("ShoppingCart", shoppingCartSchema);