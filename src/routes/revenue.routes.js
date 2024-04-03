let router = require("express").Router();
const RevenueController = require("../controllers/revenue.controller");
const auth = require("../middleware/auth.middleware");

//private
router.get("/profit", auth, RevenueController.calculateTotalProfit);
router.get("/income", auth, RevenueController.calculateTotalIncome);

module.exports = router;
