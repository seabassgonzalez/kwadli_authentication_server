// const passport to require passport
// const User to hold models user
// const config to hold config file with client secret
// const JwtStrategy to hold passport-jwt .strategy
// constact ExtractJwt to hold passport-jwt .ExtractJwt/

// setup options for JWT Strategy
// const jwtOptions set to empty object for now

// create JWT Strategy
// const jwtLogin set to new JwtStrategy() passing it jwtOptions and a callback taking payload and done
	// see if the user id in the payload exists in db using User class .findById() passing it payload.sub and a callback with error and user
		// if error
			// return error and false, no user
		// if user
			// call done(null, user)
		// else
			// call done(null, false)

// tell passport to use this strategy

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	User.findById(payload.sub, function(err, user){
		if(err){
			return done(err, false);
		}
		if(user){
			done(null, user);
		}else{
			done(null, false);
		}
	});
});