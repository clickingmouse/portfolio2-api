const mongoose = require('mongoose')
const Scehma = mongoose.Schema

//Create Scehma
const ItemSchema = new Schema({
  name:{
    type: String,
    required:true
  }
  date:{
    type: Date,
    default: Date.now
  }
})