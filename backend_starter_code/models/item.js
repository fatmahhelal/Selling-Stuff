const mongoose = require('mongoose')
require('mongoose-type-url');

const item = new mongoose.Schema({
   itemTitle :{type:String, require:true} ,
   image:[mongoose.SchemaTypes.Url],
   description : {type:String, require:true},
   price : {type: Number,require:true},
   state: {type:String}

})

const Item = mongoose.model('Item',item)

module.exports = Item
