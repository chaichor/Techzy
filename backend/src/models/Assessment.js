/*Campos 
IdUser
IdProduct
score
*/

import { Schema, model } from "mongoose";

const assessmentSchema = new Schema({
    IdUser:{
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true 
    },
    IdProduct:{
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },
    score:{
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model ("Assesment", assessmentSchema);

