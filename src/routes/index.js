const express = require("express");

const userRoute = require("./user.routes");
const authRoute = require("./auth.routes");
const exampleRoute = require("./example.routes");
const categoryRoute = require("./category.routes");
const productRoute = require("./product.routes");

const router = express.Router();

router.use("/", userRoute);
router.use("/", authRoute);
router.use("/example/", exampleRoute);
router.use("/category/", categoryRoute);
router.use("/product/", productRoute);

module.exports = router;
