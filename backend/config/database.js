// backend/config/database.js

// Import modules
const mongoose = require('mongoose');

// Connection
const connectDatabase = () => {
	mongoose.connect(process.env.DB_LOCAL_URI, {
		useNewUrlParser:true,
		useUnifiedTopology:true,
		useCreateIndex:true
	}).then(con => {
		console.log(`MongoDB database connected with HOST:${con.connection.host}`)
	})
}

module.exports = connectDatabase;