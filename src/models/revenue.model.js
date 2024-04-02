const mongoose = require("mongoose");

const RevenueSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, "can't be blank"],
      unique: true,
    },
    totalIncome: {
      type: Number,
      required: [true, "can't be blank"],
      min: [0, "must be at least 0"],
    },
    totalExpense: {
      type: Number,
      required: [true, "can't be blank"],
      min: [0, "must be at least 0"],
    },
    profit: {
      type: Number,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

const Revenue = mongoose.model("Revenue", RevenueSchema);

module.exports = Revenue;
