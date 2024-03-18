const express = require('express');

const router = express.Router();
const usersController = require('../controllers/userController.js');

router.post('/placeOrder', usersController.placeOrder);
router.get('/getAllOrders', usersController.getAllOrders);



module.exports = router;
