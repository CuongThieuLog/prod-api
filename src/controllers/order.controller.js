const Order = require("../models/order.model");
const Product = require("../models/product.model");

function OrderController() {
  this.create = async (req, res) => {
    try {
      const { userId, products, shippingAddress } = req.body;

      let total = 0;
      for (const item of products) {
        const product = await Product.findById(item.productId);
        total += product.price * item.quantity;
      }

      const order = new Order({
        user: userId,
        products: products.map((item) => ({
          product: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
        total,
        shippingAddress,
        status: "PENDING",
      });

      await order.save();

      for (const item of products) {
        const product = await Product.findById(item.productId);
        product.quantity -= item.quantity;
        await product.save();
      }

      res.status(201).json({ message: "Order successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error" });
    }
  };

  return this;
}

module.exports = new OrderController();
