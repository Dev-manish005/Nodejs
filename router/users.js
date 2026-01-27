
module.exports = function (app, client) {

	let currPath = "/users";

	/* GET URLs */

    // URL: /users/api/v1/get_user/:id/

	// URL: /users/get_user/:id/
	app.get(currPath + "/get_user/:id/", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/users/get_user.js");
		urlLogicOBJ.main(req, res, client);
	});

    // URL: /users/get_user_list/:id/
	app.get(currPath + "/get_user_list", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/users/get_user_list.js");
		urlLogicOBJ.main(req, res, client);
	});


    /* POST URLs */

    // URL: /users/create_user/:id/
	app.post(currPath + "/create_user", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/users/create_user.js");
		urlLogicOBJ.main(req, res, client);
	});




    /* DELETE URLs */

    // URL: /users/delete_user/:id/
	app.delete(currPath + "/delete_user/:id", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/users/delete_user.js");
		urlLogicOBJ.main(req, res, client);
	});

};