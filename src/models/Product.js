import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    slug: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    ingredient: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }, 
    discount: {
        type: Number,
    }, 
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    recipe: {
        type: String,
    },
},
{timestamps: true}
);

const Product = models.Product || model("Product", productSchema);
export default Product;