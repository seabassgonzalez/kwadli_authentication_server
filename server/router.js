// const authentication to store require for authentication controller

// module.exports function passing it app
	// post request for user name and password to signup route using Authentication.signup
 
const Authentication = require('./controllers/authentication');

module.exports = function(app){
	app.post('/signup', Authentication.signup);
}