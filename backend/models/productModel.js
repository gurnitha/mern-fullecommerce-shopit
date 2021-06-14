// backend/models/productModel.js

// Import modules
const mongoose = require('mongoose');

// Model schema 
const.productSchema = new mongoose.schema({
	name: {
		type: String, 
		required: [true, 'Please enter product name'],
		trim: true, 
		maxLength: [100, 'Product name connot exceed 100 characters']
	},
	price: {
		type: Number, 
		required: [true, 'Please enter product price'],
		trim: true, 
		maxLength: [5, 'Product name connot exceed 5 characters'],
		default: 0.0
	},
	description: {
		type: String, 
		required: [true, 'Please enter product description'],
		trim: true
	},
	rating: {
		type: Number,
		default: 0  
	},
	images: [
		{
			public_id: {
				type: String,
				required: true 
			}, 
		 	url: {
		 		type: String,
		 		required: true 
			},
		}
	],
	category: {
		type: String,
		required: [true, 'Please select a category for this product'],
		enum: {
			values: [
				'Electronics',
				'Cameras', 
				'Laptop', 
				'Accessories', 
				'Headphones', 
				'Food', 
				'Books', 
				'Clothes/Shoes',
				'Beauty/Health', 
				'Sports', 
				'Home '
			], 
			message: 'Please select correct category for this product'
		}
	},
	seller: {
		type: String, 
		required: [true, 'Please enter product seller']
	}, 
	stock: {
		type: Number, 
		required: [true, 'Please enter product stock'],
		maxLength: [5, 'Product name cannot exceed 5 characters'], 
		default: 0
	}, 
	numOfReviews: {
		type: Number, 
		default: 0 
	}, 
	reviews: [
		{
			name: {
				type: String, 
				required: true
			},
			rating: {
				type: Number, 
				required: true
			}, 
			comment: {
				type: String, 
				required: true
			}
		}	
	], 
	createdAt: {
		type: Date, 
		default: Date.now 
	}
})


// Export modules
module.exports = mongoose.model('Product', 'productSchema');

