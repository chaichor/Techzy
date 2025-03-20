/*Campos:
    idShoppingCart
    cardNumber
    expirationDate
    securityCode
    nameOnCard
    address
    state
*/

import { Schema, model } from "mongoose";

const checkOutSchema = new Schema ({
    idShoppingCart: {
        type: Schema.Types.ObjectId,
        ref: "ShoppingCart",
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true,
    },
    securityCode: {
        type: Number,
        required: true,
        minimum: 3,
        maximum: 3
    },
    nameOnCard: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("CheckOut", checkOutSchema);