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

require(__dirname + '/router')(app);


app.listen(9998, () => {
    console.log("Server is running  port 9998.");
});