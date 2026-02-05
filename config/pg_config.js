require('dotenv').config();

const { Client } = require('pg');

const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD
});

client.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
   console.log("Postgres connected Successfully");
});

module.exports = client;
