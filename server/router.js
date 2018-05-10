// module.exports function passing it app
	// add route that user can visit using app.get() passing it / and function taking request, response, and next
		// res.send() an array of strings
module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send(['horizon', 'metalgear', 'fortnite']);
	});
}