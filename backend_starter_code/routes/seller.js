// Require necessary NPM packages
const express = require('express');

const {Seller,Item} = require('../models/seller')




// // Instantiate a Router (mini app that only handles routes)
const router = express.Router();

router.use(express.json())

// /**
//  * Action:      INDEX
//  * Method:      GET
//  * URI:         /
//  * Description: Get all the seller
//  */

router.get('/allSeller', (req, res) => {
  console.log('POST /users');
  Seller.find({}, (err, newUser) => {
    if (err) {
      console.log('ERR: ', err);
    } else {
      console.log(newUser)
      res.json(newUser);
    }
  });
});

/**
 * Action:      INDEX
 * Method:      Get
 * URI:         /oneSeller
 * Description: find seller
 */

router.get('/oneSeller', (req, res) => {
  console.log('You Item List');
  Seller.find({userName:req.query.userName}, (err, foundUser) => {
    console.log('FOUND USER: ', foundUser);
    if (err) {
      console.log('ERR: ', err);
    } else {
      res.json(foundUser);
    }
  });
});



/**
 * Action:      INDEX
 * Method:      post
 * URI:         /
 * Description: add new seller
 */
router.post('/addUser', (req, res) => {
  console.log('POST /users');
  console.log('BODY: ', req.body);
  Seller.create(req.body, (err, newUser) => {
    if (err) {
      console.log('ERR: ', err);
    } else {
      // console.log(newUser)
      res.json(newUser);
    }
  });
});





/**
 * Action:      INDEX
 * Method:      post
 * URI:         /myItem
 * Description: add new item by seller
 */

router.post('/AddItem', (req, res) => {
  console.log('You Item List');
  const newItem = new Item (req.body)
  Seller.find({userName:req.query.userName}, (err, foundSeller) => {
    console.log('FOUND USER: ', foundSeller);
    foundSeller[0].item.push(newItem);

    foundSeller[0].save((err, result) => {
      if (err) {
        console.log('ERR: ', err);
      } else {
        res.json(result);
      }
    })
  });
});


/**
 * Action:      INDEX
 * Method:      delete
 * URI:         /item
 * Description: delete specific item by user 
 */
router.delete('/item/:userName/:id', (req, res) => {
  console.log('delete /item');
  console.log("Id", req.params.id);
  Seller.find({ 'userName': req.params.userName }, (err, foundUser) => {
    console.log('FOUND USER: ', foundUser);
    console.log('FOUND Item: ', foundUser[0].item);
    foundUser[0].item.id(req.params.id).remove();
    foundUser[0].save((err, result) => {
      if (err) {
        console.log('ERR: ', err);
      } else {
        res.json(result);
      }
    });
  });
})


/**
 * Action:      INDEX
 * Method:      delete
 * URI:         /item
 * Description: delete all item by seller 
 */
router.delete('/deleteAllItem', (req, res) => {
  console.log('delete /item');
  Seller.find({ userName: req.query.userName }, (err, foundUser) => {
    console.log('FOUND USER: ', foundUser);
    console.log('FOUND Item: ', foundUser[0].item);
    foundUser[0].item=[];
    foundUser[0].save((err, result) => {
      if (err) {
        console.log('ERR: ', err);
      } else {
        res.json(result);
      }
    });
  });
})



















// Export the Router so we can use it in the server.js file
module.exports = router;



//
