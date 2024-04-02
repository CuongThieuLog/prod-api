const Product = require("../models/product.model");

function ProductController() {
  this.create = async (req, res) => {
    try {
      const { name, description, price, quantity, category, image } = req.body;
      const product = new Product({
        name,
        description,
        price,
        quantity,
        category,
        image,
      });
      await product.save();
      res.status(201).json({ message: "Created successfully", data: product });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  this.getAll = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  this.getById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Not Found!" });
      }
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  this.update = async (req, res) => {
    try {
      const { name, description, price, quantity, category, image } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name, description, price, quantity, category, image },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ message: "Not Found!" });
      }
      res.status(200).json({
        message: "Updated successfully",
        data: updatedProduct,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  this.delete = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Not Found!" });
      }
      res.status(200).json({
        message: "Deleted successfully",
        data: deletedProduct,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  this.getRemainingQuantity = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Not Found!" });
      }
      const remainingQuantity = product.quantity;
      res.status(200).json({ remainingQuantity: remainingQuantity });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  return this;
}

module.exports = new ProductController();
