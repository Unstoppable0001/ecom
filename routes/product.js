const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.post('/addproduct', productsController.addproduct);
router.get('/getProducts', productsController.getProducts);

module.exports = router;



