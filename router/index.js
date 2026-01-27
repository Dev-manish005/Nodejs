const client = require("../config/pg_config");

module.exports = function (app) {
	require('./users')(app, client);
	require('./file_system')(app, client);
	require('./email')(app, client);
};