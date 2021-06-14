// backend/app.js

// Import node modules
const express = require('express');
const app = express();

app.use(express.json());

// Import from locals
const products = require('./routes/productRoute');

// Use the the app module
app.use('/api/v1', products);

// Export modules 
module.exports = app;