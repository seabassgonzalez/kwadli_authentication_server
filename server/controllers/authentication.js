// export a function signup that takes a request, response, and next for errors
	// make a response with res.send passing simple json to client success set to true

exports.signup = function(req,res,next){
	res.send({ success: 'true' });
}