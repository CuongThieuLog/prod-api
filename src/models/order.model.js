const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "can't be blank"],
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "must be at least 1"],
        },
        price: {
          type: Number,
          required: true,
          min: [0, "must be at least 0"],
        },
      },
    ],
    total: {
      type: Number,
      required: [true, "can't be blank"],
      min: [0, "must be at least 0"],
    },
    shippingAddress: {
      type: String,
      required: [true, "can't be blank"],
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
