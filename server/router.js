// const authentication to store require for authentication controller
// const to hold passportService from services passport
// const passport to hold passport.js library

// const requireAuth that calls passport.authenticate() passing it jwt and specifing session false, used only for cookies

// module.exports function passing it app
	// app.get request for / route passing it requireAuth and a callback req res function
		// response send information: 'dummy'
	// post request for user name and password to signup route using Authentication.signup
 
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app){
	app.get('/', requireAuth, function(req, res){
		res.send({ information: 'dummy' });
	});
	app.post('/signup', Authentication.signup);
}