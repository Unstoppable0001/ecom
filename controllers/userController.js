

const product = require("../models/Product.js")
const user = require("../models/User.js")

exports.placeOrder = async (req, res) => {
  try {
  const { firstName, lastName, address, productId } = req.body;

  const getProduct = await product.findOne({_id:productId});
  console.log(getProduct);
  if (!getProduct) {
   return res.json({msg:'product not found!'})
  }

  if (!firstName || !lastName || !address) {
    return res.status(400).json({ error: 'Invalid user details' });
  }


  const add = new user({
    productId,
    firstName,
    lastName,
    address,
  });

    await add.save();
    res.json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.getAllOrders = async (req, res) => {
  try {
  const {id  } = req.body;

  const getProduct = await user.find();
  console.log(getProduct);
  if (!getProduct) {
   return res.json({msg:'product not found!'})
  }
   return res.json(getProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
