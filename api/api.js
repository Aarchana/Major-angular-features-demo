const express = require('express')
const cors = require('cors')
const _ = require('underscore')

const app = express()
app.use(cors())

app.listen(3000, function() {
    console.log('Listening at ' + this.address().port)
})

app.get('/login', function(req, res) {
    res.send({
        isAuthenticated: true
    })
})

app.get('/products', function(req,res) {
    res.send([{
        id: 1,
        name: "cadbury celebrations",
        descripiton: "delicious cadbury1"
    },
    {
       id: 2,
       name: "Cadbury Marvello",
       descripiton: "delicious cadbury"
    },
    {
        id:3,
        name: "Ferrero rocher",
        descripiton: "delicious cadbury"
    }
    ])
})

app.get('/product/:id', function(req, res) {
    setTimeout(() => {
    res.status(400).send({
        "id": Math.ceil(Math.random() *10),
        "category": "chocolate",
        "price": Math.ceil(Math.random() *1000),
        "rating": 4,
        "seller": "cadbury"
    })}, 500)
})