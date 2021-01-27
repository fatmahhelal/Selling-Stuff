// Require necessary NPM packages
const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
   itemTitle :{type:String, require:true} ,
   image:{type:String},
   description : {type:String, require:true},
   price : {type: Number,require:true},
   state: {type:String}

})



const sellerSchema = new mongoose.Schema({
   userName:{type:String, require:true , unique:true} ,
   name: {type:String, require:true},
   cotactInfo : {type:String,require:true},
   item : [itemSchema]
})

const Seller = mongoose.model('Seller',sellerSchema)
const Item = mongoose.model('Item',itemSchema)

module.exports = {Seller,Item}





