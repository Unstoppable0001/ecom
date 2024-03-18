const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  userDate: { type: Date, default: Date.now },
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
});

const user = mongoose.model('user', userSchema);

module.exports = user;

