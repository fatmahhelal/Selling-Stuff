// Require necessary NPM packages
const express = require("express");

const { Seller, Item } = require("../models/seller");

// // Instantiate a Router (mini app that only handles routes)
const router = express.Router();

router.use(express.json());

// /**
//  * Action:      INDEX
//  * Method:      GET
//  * URI:         /
//  * Description: Get all the seller
//  */

router.get("/allSeller", (req, res) => {
  console.log("POST /users");
  Seller.find({}, (err, newUser) => {
    if (err) {
      console.log("ERR: ", err);
    } else {
      console.log(newUser);
      res.json(newUser);
    }
  });
});

// /**
//  * Action:      INDEX
//  * Method:      GET
//  * URI:         /
//  * Description: Get all item
//  */
router.get("/allItem", (req, res) => {
  console.log("POST /users");
  Item.find({}, (err, newUser) => {
    if (err) {
      console.log("ERR: ", err);
    } else {
      console.log(newUser);
      res.json(newUser);
    }
  });
});

// /**
//  * Action:      INDEX
//  * Method:      GET
//  * URI:         /
//  * Description: Get one item
//  */
router.get("/OneItem", (req, res) => {
  console.log("You Item List");
  Item.findById(req.query.id, (err, foundUser) => {
    console.log("FOUND USER: ", foundUser);
    if (err) {
      console.log("ERR: ", err);
    } else {
      res.json(foundUser);
    }
  });
});

// /**
//  * Action:      INDEX
//  * Method:      GET
//  * URI:         /
//  * Description: Get one item by name
//  */

router.get("/oneItemByname", (req, res) => {
  console.log("You Item List");
  console.log("FOUND Item: ", req.query.itemTitle);
  Item.find(
    { itemTitle: new RegExp(req.query.itemTitle, "i") },
    (err, foundItem) => {
      console.log("FOUND USER: ", foundItem);
      if (err) {
        console.log("ERR: ", err);
      } else {
        res.json(foundItem);
      }
    }
  );
});

/**
 * Action:      INDEX
 * Method:      Get
 * URI:         /oneSeller
 * Description: find one seller
 */

router.get("/oneSeller", (req, res) => {
  console.log("You Item List");
  Seller.find({ userName: req.query.userName }, (err, foundUser) => {
    console.log("FOUND USER: ", foundUser);
    if (err) {
      console.log("ERR: ", err);
    } else {
      res.json(foundUser);
    }
  });
});

router.get("/oneSellerId", (req, res) => {
  console.log("You Item List");
  Seller.findById(req.query.id, (err, foundUser) => {
    console.log("FOUND USER: ", foundUser);
    if (err) {
      console.log("ERR: ", err);
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
router.post("/addUser", (req, res) => {
  console.log("POST /users");
  console.log("BODY: ", req.body);
  Seller.create(req.body, (err, newUser) => {
    if (err) {
      console.log("ERR: ", err);
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

router.post("/AddItem", async (req, res) => {
  try {
    let seller = await Seller.findOne({ userName: req.query.userName });
    console.log({ userName: req.query.userName });
    if (seller) {
      const newItem = new Item(req.body);
      newItem.sellerId = seller._id;
      console.log(newItem);
      await newItem.save();
      seller.item.push(newItem._id);
      await seller.save();
      res.json(newItem);
    }
  } catch (err) {
    res.json(err);
  }
});

/**
 * Action:      INDEX
 * Method:      delete
 * URI:         /item
 * Description: delete specific item by user
 */
router.delete("/itemDelet", (req, res) => {
  // console.log('delete /item');
  // console.log("Id", req.params.id);
  // Seller.find({ 'userName': req.params.userName }, (err, foundUser) => {
  //   console.log('FOUND USER: ', foundUser);
  //   console.log('FOUND Item: ', foundUser[0].item);
  //   foundUser[0].item.id(req.params.id).remove();
  //   foundUser[0].save((err, result) => {
  //     if (err) {
  //       console.log('ERR: ', err);
  //     } else {
  //       res.json(result);
  //     }
  //   });
  // });
  let seller = Seller.findOne({ userName: req.query.userName });
  console.log({ userName: req.query.userName });

  const ItemId = Item.findById(req.query.id);
  console.log(ItemId);
  //  ItemId.remove()
  //  Item.save()
});

router.post("/AddItem", async (req, res) => {
  try {
    let seller = await Seller.findOne({ userName: req.query.userName });
    console.log({ userName: req.query.userName });
    if (seller) {
      const newItem = new Item(req.body);
      console.log(newItem);
      await newItem.save();
      seller.item.push(newItem._id);
      await seller.save();
      res.json(newItem);
    }
  } catch (err) {
    res.json(err);
  }
});

/**
 * Action:      INDEX
 * Method:      delete
 * URI:         /item
 * Description: delete all item by seller
 */
router.delete("/deleteAllItem", (req, res) => {
  console.log("delete /item");
  Seller.find({ userName: req.query.userName }, (err, foundUser) => {
    console.log("FOUND USER: ", foundUser);
    console.log("FOUND Item: ", foundUser[0].item);
    foundUser[0].item = [];
    foundUser[0].save((err, result) => {
      if (err) {
        console.log("ERR: ", err);
      } else {
        res.json(result);
      }
    });
  });
});

// Export the Router so we can use it in the server.js file
module.exports = router;

//
