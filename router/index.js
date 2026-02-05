const pg_client = require("../config/pg_config");
const mongo_client = require("../config/mongo_config");
module.exports = function (app) {
	require('./users')(app, pg_client);
	require('./file_system')(app, pg_client);
	require('./email')(app, pg_client);
	require('./movies')(app, mongo_client);
};