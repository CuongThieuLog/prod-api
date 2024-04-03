const Revenue = require("../models/revenue.model");
const Order = require("../models/order.model");
const Product = require("../models/product.model");

function RevenueController() {
  //Tổng lợi nhuận
  this.calculateTotalProfit = async (req, res) => {};

  //Tổng thu nhập
  this.calculateTotalIncome = async (req, res) => {};

  //Tổng chi phí
  this.calculateTotalExpense = async (req, res) => {};
  return this;
}

module.exports = RevenueController();
