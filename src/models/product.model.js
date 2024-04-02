const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    description: {
      type: String,
      required: [true, "can't be blank"],
    },
    price: {
      type: Number,
      required: [true, "can't be blank"],
      min: [0, "must be at least 0"],
    },
    quantity: {
      type: Number,
      required: [true, "can't be blank"],
      min: [0, "must be at least 0"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
