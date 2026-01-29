

module.exports = function (app, client) {

	let currPath = "/file_system";

	const multer = require("multer");
	const fs = require("fs");
	const path = require("path");

	const dir = './uploads';
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	// Configure Multer storage
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, 'uploads/'); // store files in documents folder
		},
		filename: function (req, file, cb) {
			// Generate unique filename
			const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
			const ext = path.extname(file.originalname);
			cb(null, file.fieldname + '-' + uniqueSuffix + ext);
		}
	});

	const upload = multer({ storage: storage });

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

	// URL: /filesystem/uploads_doc.js/
	app.post(currPath + "/upload_doc",upload.single("file"), function (req, res) {//api path

		let urlLogicOBJ = require(__dirname + "/../src/file_system/upload_doc.js");//folder location
		urlLogicOBJ.main(req, res, client);
	});
};