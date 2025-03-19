/*Campos:
    firstName
    lastName
    birthDate
    email
    password
    phoneNumber
*/

import { Schema, model } from "mongoose";

const usersSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    phoneNumber: {
        type: String,
        required: true,
        minLength: 8
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Users", usersSchema);