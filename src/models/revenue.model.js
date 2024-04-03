const mongoose = require("mongoose");

const RevenueSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: [true, "can't be blank"],
    },
    revenue: {
      type: Number,
      required: [true, "can't be blank"],
      min: [0, "must be at least 0"],
    },
    profit: {
      type: Number,
      required: [true, "can't be blank"],
      min: [0, "must be at least 0"],
    },
    date: {
      type: Date,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

const Revenue = mongoose.model("Revenue", RevenueSchema);

module.exports = Revenue;
