// backend/server.js

// Node modules
const app = require('./app');
const dotenv = require('dotenv');

// Import locals
const connectDatabase = require('./config/database');

// Setting up config file
dotenv.config({
	path: 'backend/config/config.env'
});

// Connecting to database
connectDatabase();

// Server listen to PORT
app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT:${process.env.PORT} in ${process.env.NODE_ENV} node.`);
});
