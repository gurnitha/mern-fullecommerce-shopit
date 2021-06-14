// backend/routes/product.js

// Import node modules
const express = require('express');
const router = express.Router();

// Import from locals
const { getProducts } = require('../controllers/productController');

// Define the routes
// 'http://localhost/api/v1/products' 
router.route('/products').get(getProducts);

// Export router
module.exports = router;