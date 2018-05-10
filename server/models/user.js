// create const mongoose to hold require mongoose
// create const Schema to pull Schema off of mongoose

// Define model
// create const userSchema that's a new Schema
	// email set to String type, but wrap in object and additional property to ensure user uniqueness
	// password set to String type

// Create the model class

// Export the model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String, unique: true },
	password: String
});