// console.log("hello,Node");
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello Bro!')
})

app.get('/query/', (req, res) => {
    res.send(req.query)
})

app.get('/param/:id/:name/', (req, res) => {
    res.send(req.params.id)
})

app.post('/body/', (req, res) => {
    res.send(req.body)
})

// const { Client } = require('pg');
// const client = new Client({
//     host: "localhost",
//     port: "5432",
//     database: "manish_sith",
//     user: "postgres",
//     password: "root",
// });

// client.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//    console.log("Database connected Successfully");
// });


const client = require("./config/pg_config");


app.post('/users/create_user/', (req, res) => {
    console.log(__dirname);
    var file = require(__dirname + "/src/users/create_user.js");
    file.main(req, res, client);
})

app.get('/users/get_user/:id', (req, res) => {
    var file = require(__dirname + "/src/users/get_user.js");
    file.main(req, res, client);
})

app.get('/users/get_user_list/', (req, res) => {
    var file = require(__dirname + "/src/users/get_user_list.js");
    file.main(req, res, client);
})


app.patch('/users/delete_user/:id', (req, res) => {
    var file = require(__dirname + "/src/users/delete_user.js");
    file.main(req, res, client);
})

//file system

app.post('/file_system/write_file/', (req, res) => {
    var file = require(__dirname + "/src/file_system/write_file.js");
    file.main(req, res, client);
})

app.post('/file_system/write_file_async/', (req, res) => {
    var file = require(__dirname + "/src/file_system/write_file_async.js");
    file.main(req, res, client);
})

app.get('/file_system/read_file/', (req, res) => {
    var file = require(__dirname + "/src/file_system/read_file.js");
    file.main(req, res, client);
})

app.get('/file_system/read_file_async/', (req, res) => {
    var file = require(__dirname + "/src/file_system/read_file_async.js");
    file.main(req, res, client);
})

app.put('/file_system/append_file/', (req, res) => {
    var file = require(__dirname + "/src/file_system/append_file.js");
    file.main(req, res, client);
})

app.put('/file_system/append_file_async/', (req, res) => {
    var file = require(__dirname + "/src/file_system/append_file_async.js");
    file.main(req, res, client);
})

app.post('/email/send_email/', (req, res) => {
    var file = require(__dirname + "/src/email/send_email.js");
    file.main(req, res, client);
})

app.listen(9998, () => {
    console.log("Server is running  port 9998.");
});