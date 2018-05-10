// const passport to require passport
// const User to hold models user
// const config to hold config file with client secret
// const JwtStrategy to hold passport-jwt .strategy
// constact ExtractJwt to hold passport-jwt .ExtractJwt/

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;