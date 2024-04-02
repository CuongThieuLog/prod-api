let router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const auth = require("../middleware/auth.middleware");

//private
router.post("/", auth, OrderController.create);

module.exports = router;
