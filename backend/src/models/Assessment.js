/*Campos 
IdUser
IdProduct
score
*/

import {Shcema, model } from "mongoose";

const assessmentSchema = new Schema({
    IdUser:{
    type: Shcema.types.ObjectId,
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

