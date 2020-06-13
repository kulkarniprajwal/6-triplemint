const mongoose = require('mongoose')

var Restaurant_Customer = mongoose.model('Restaurant_Customer', {
  name: { type: String },
  customerNumber: { type: Number },
  starter: { type: String },
  mainCourse: { type: String },
  dessert: { type: String }
})



module.exports = {
  Restaurant_Customer
}