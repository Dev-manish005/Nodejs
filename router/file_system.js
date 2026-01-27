

module.exports = function (app,client) {

	let currPath = "/file_system";

	/* GET URLs */

	// URL: /user/api/v1/read_file/:id/
	app.get(currPath + "/read_file", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/file_system/read_file.js");
		urlLogicOBJ.main(req, res, client);
	});

    // URL: /user/api/v1/read_file_async/:id/
	app.get(currPath + "/read_file_async", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/file_system/read_file_async.js");
		urlLogicOBJ.main(req, res, client);
	});

    
	/* POST URLs */

	// URL: /user/api/v1/write_file/:id/
	app.post(currPath + "/write_file", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/file_system/write_file.js");
		urlLogicOBJ.main(req, res, client);
	});

    // URL: /user/api/v1/write_file_async/:id/
	app.post(currPath + "/write_file_async", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/file_system/write_file_async.js");
		urlLogicOBJ.main(req, res, client);
	});

    /* PUT URLs */

	// URL: /user/api/v1/append_file/:id/
	app.put(currPath + "/append_file", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/file_system/append_file.js");
		urlLogicOBJ.main(req, res, client);
	});

    // URL: /user/api/v1/append_file_async/:id/
	app.put(currPath + "/append_file_async", function (req, res) {

		let urlLogicOBJ = require(__dirname + "/../src/file_system/append_file_async.js");
		urlLogicOBJ.main(req, res, client);
	});
};