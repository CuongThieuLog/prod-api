const express = require("express");

const userRoute = require("./user.routes");
const authRoute = require("./auth.routes");
const exampleRoute = require("./example.routes");
const categoryRoute = require("./category.routes");

const router = express.Router();

router.use("/", userRoute);
router.use("/", authRoute);
router.use("/example/", exampleRoute);
router.use("/category/", categoryRoute);

module.exports = router;
