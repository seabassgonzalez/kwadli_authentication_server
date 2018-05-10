// create const mongoose to hold require mongoose
// create const Schema to pull Schema off of mongoose

// Define model
// create const userSchema that's a new Schema
	// email set to String type, but wrap in object and additional property to ensure user uniquenes, and another lowercase set to true to make sure all usernames unique
	// password set to String type

// Create the model class
// create const ModelClass set to mongoose.model() passing it user and userSchema

// Export the model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;