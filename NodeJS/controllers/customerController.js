const express = require('express')
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;

var { Restaurant_Customer } = require('../models/Customer.js')

router.get('/', (req, res) => {
  Restaurant_Customer.find((err, docs) => {
    if (!err) { res.send(docs) }
    else {
      console.log('Error in retrieving Customers : ' + JSON.stringify(err, undefined, 2))
    }
  })
})

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id')
  Restaurant_Customer.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc) }
    else {
      console.log('Error in retrieving Customers : ' + JSON.stringify(err, undefined, 2))
    }

  })
})

router.post('/', (req, res) => {
  var cus = new Restaurant_Customer({
    name: req.body.name,
    customerNumber: req.body.customerNumber,
    starter: req.body.starter,
    mainCourse: req.body.mainCourse,
    dessert: req.body.dessert
  })
  cus.save((err, doc) => {
    if (!err) { res.send(doc) }
    else { console.log('Error in Customer Save') }
  })
})


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id')
  var cus = {
    name: req.body.name,
    customerNumber: req.body.customerNumber,
    starter: req.body.starter,
    mainCourse: req.body.mainCourse,
    dessert: req.body.dessert
  }
  Restaurant_Customer.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc) }
    else { console.log('Error in Customer Save') }
  })
})


router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id')
  
  Restaurant_Customer.findByIdAndRemove(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc) }
    else { console.log('Error in Customer Save') }
  })
})

module.exports = router