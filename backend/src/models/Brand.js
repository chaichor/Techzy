/*
Campos:
brandName
*/
import { Schema, model } from "mongoose";


const brandSchema = new Schema({
    
    brandName: {
        type: String,
        required: true,
        maxLength: 100,
    },
},
{timestamps: true,
strict: true,
}
);

export default model("Brand", brandSchema);
