const mongoose = require('mongoose')

const item = new mongoose.Schema({
   itemTitle :{type:String, require:true} ,
   image: {type: URL},
   description : {type:String, require:true},
   price : {type: Number,require:true},
   state: {type:String}

})

const Item = mongoose.model('Item',item)

module.exports = Item
