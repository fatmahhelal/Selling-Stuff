// Require necessary NPM packages
const mongoose = require('mongoose')
const Item = require('./item')

const seller = new mongoose.Schema({
   userName:{type:String, require:true} ,
   name: {type:String, require:true},
   cotactInfo : {type:String,require:true},
   item : [Item],
})

const Seller = mongoose.model('Seller',seller)

module.exports = Seller
