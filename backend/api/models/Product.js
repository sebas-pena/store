const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        categories: { type: Array, required: true },
        desc: { type: String, required: true },
        variants : [
            {
                color: {
                    type: Array,
                },
                size: {
                    type: Array,
                },
            }
        ],
        ratings: { type: Number, default: 0 },
        img: [
            {
                smallImg : {
                    type: String,
                    required: true
                },
                mediumImg : {
                    type: String,
                    required: true
                },
                bigImg : {
                    type: String,
                    required: true
                }
            }
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);