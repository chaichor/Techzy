/*
idUser
idProduct 
amount
*/

import {Schema, model } from "mongoose";

const favoritesSchema = new Schema({
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
    amount:{
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model ("Favorites", favoritesSchema);

