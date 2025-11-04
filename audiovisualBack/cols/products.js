import { Schema, model } from "mongoose";

const productSchema = Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number
    }
});

const Product = model("hola", productSchema);

export default Product;