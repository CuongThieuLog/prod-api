let router = require("express").Router();
const CategoryController = require("../controllers/category.controller");
const auth = require("../middleware/auth.middleware");

//private
router.get("/", auth, CategoryController.getAll);
router.post("/", auth, CategoryController.create);
router.get("/:id", auth, CategoryController.getById);
router.put("/:id", auth, CategoryController.update);
router.delete("/:id", auth, CategoryController.getById);

module.exports = router;
