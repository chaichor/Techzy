/*Campos:
    firstName
    lastName
    birthDate
    email
    password
    phoneNumber
*/

import { Schema, model } from "mongoose";

const productsSchema = new Schema ({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true,
    },
    birthDate: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minLength: 7
    },
    phoneNumber: {
        type: String,
        require: true,
        minLength: 8
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Users", productsSchema);