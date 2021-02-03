// Require necessary NPM packages
const express = require('express');
require("dotenv").config();
const path = require('path')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT ||5000;
const cors = require("cors");
const db_url = require('./db');
//Make sure to add to your whitelist any website or APIs that connect to your backend.
var whitelist = [`http://localhost:${PORT}`];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  },
};

app.use(cors(corsOptions));

const sellerRouter = require('./routes/seller');

app.use('/api/seller',sellerRouter);
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

// Establish Database Connection
mongoose.connect(process.env.mongoDbUrl, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});



app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
}); 

app.listen(PORT);

app.get('/', (req, res) => {
  console.log('get /');
  res.json('result');
});

const reactPort = 5000;


/*** Routes ***/
// Define PORT for the API to run on


// Start the server to listen for requests on a given port
// app.listen(PORT, () => {
//   console.log(`sellerItem => http://localhost:${PORT}`);
// });

