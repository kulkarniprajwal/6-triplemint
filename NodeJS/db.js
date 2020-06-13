const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Restaurant_Customer',(err)=>{
  console.log('MongoDb connection succeeded!')
})
module.exports = mongoose