// Require necessary NPM packages
const express = require('express');

const Seller = require('../models/seller')

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */
router.get('/user/test', (req, res) => {
  console.log('articles')
  res.json({
    message: 'Welcome to Articles',
  });
});

/**
 * Action:      INDEX
 * Method:      post
 * URI:         /
 * Description: Get the Root Route
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






// Export the Router so we can use it in the server.js file
module.exports = router;