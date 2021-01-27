// Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Require Route Files
const itemRouter = require('./routes/item');
const sellerRouter = require('./routes/seller');
// Instantiate Express Application Object
const app = express();

/*** Routes ***/

// Mount imported Routers
app.use(itemRouter);
app.use(sellerRouter);
app.use(express.json());

// Require DB Configuration File
const db_url = require('./db');

// Establish Database Connection
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});




app.get('/', (req, res) => {
  console.log('get /');
  res.json('result');
});

/*** Middleware ***/

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application


const reactPort = 3000;
// Set CORS headers on response from this API using the `cors` NPM package.
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);




/*** Routes ***/
// Define PORT for the API to run on
const PORT = process.env.PORT ||5000;

// Start the server to listen for requests on a given port
app.listen(PORT, () => {
  console.log(`sellerItem => http://localhost:${PORT}`);
});

/*
  C.R.U.D - Actions Table

  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/
