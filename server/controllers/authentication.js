// store imported user model 

// export a function signup that takes a request, response, and next for errors
	// store email off the request using req.body
	// store password off the request using req.body

	// see if a user with given email exists - use .findOne to search User class looking for property email equal to email from request and a callback for errors and possibly a matching user
		// check if there was en error
			// return next(error)
		// if user with email does exist
			// return error status 422 and error message email in use
		// if user with email does not exist
		// create using new instance of User class
			// email set to email from request
			// password set to password from request
		// save record using user.save() passing callback to know when complete takes error
			// if error	
				// return error
			// respond to request indicating the user was created with res.json()

const User = require('../models/user');

exports.signup = function(req,res,next){
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({email:email}, function(err, existingUser){
		if(err){
			return next(err);
		}
		if(existingUser){
			return res.status(422).send({ error: 'email is in use' });
		}
		const user = new User({
			email: email,
			password: password
		});
		user.save(function(err){
			if(err){
				return next(err);
			}
			res.json({ success: true });
		});
	});
}