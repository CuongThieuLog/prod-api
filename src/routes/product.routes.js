let router = require("express").Router();
const ProductController = require("../controllers/product.controller");
const auth = require("../middleware/auth.middleware");

//private
router.get("/", auth, ProductController.getAll);
router.post("/", auth, ProductController.create);
router.get("/:id", auth, ProductController.getById);
router.put("/:id", auth, ProductController.update);
router.delete("/:id", auth, ProductController.getById);

module.exports = router;
