
const Product = require("../models/Product.js")

exports.addproduct = async (req, res) => {
  try {
const {name, description, price}= req.body;
    const product = new Product({name, description,price});
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
