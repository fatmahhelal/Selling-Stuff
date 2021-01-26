// Require necessary NPM packages
const mongoose = require('mongoose')
require('mongoose-type-url');

const itemSchema = new mongoose.Schema({
   itemTitle :{type:String, require:true} ,
   image:[mongoose.SchemaTypes.Url],
   description : {type:String, require:true},
   price : {type: Number,require:true},
   state: {type:String}

})



const sellerSchema = new mongoose.Schema({
   userName:{type:String, require:true} ,
   name: {type:String, require:true},
   cotactInfo : {type:String,require:true},
   item : [itemSchema]
})

const Seller = mongoose.model('Seller',sellerSchema)
const Item = mongoose.model('Item',itemSchema)

module.exports = Seller
module.exports = Item



// const mongoose = require('mongoose');

// const tweetSchema = new mongoose.Schema({
//   text: String,
//   date: Date,
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   // embed tweets in user
//   tweets: [tweetSchema],
// });

// const User = mongoose.model('User', userSchema);
// const Tweet = mongoose.model('Tweet', tweetSchema);

// module.exports = {
//   favFood: 'CHICKEN',
//   // User,
//   User: User,
//   // Tweet,
//   Tweet: Tweet,
// };

