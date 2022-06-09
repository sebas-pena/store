const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        categories: { type: Array, required: true },
        stock: { type: Number, required: true },
        price: { type: Number, required: true },
        color: { type: Array },
        ratings: { type: Number, default: 0 },
        img: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);