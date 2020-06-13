const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors'); 

const { mongoose } = require('./db.js')
var customerController = require('./controllers/customerController.js')

var app = express();
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:4200'}))

app.listen(8080, function(){ console.log('Server started at port : 8080')})

app.use('/customer', customerController)