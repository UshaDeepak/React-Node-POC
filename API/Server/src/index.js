// console.log('Hello, world!');

// ... leave the other require statements untouched ...
const {startDatabase} = require('./database/mongo');
const {insertAd, getAds} = require('./database/ads');
const express = require('express');
const cors = require('cors')
let app = express();

app.use(cors());
// ... leave the app definition and the middleware config untouched ...

// replace the endpoint responsible for the GET requests
app.get('/users', async (req, res) => {
  res.send(await getAds());
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
  await insertAd({userEmail: 'Admin@ibm.com', userPassword: 'Admin'});
  await insertAd( {userEmail: 'user1@ibm.com', userPassword: 'user1'});
  await insertAd( {userEmail: 'user2@ibm.com', userPassword: 'user2'});
  await insertAd( {userEmail: 'user3@ibm.com', userPassword: 'user3'});
  await insertAd({userEmail: 'user4@ibm.com', userPassword: 'user4'});

  // start the server
  app.listen(3001, async () => {
    console.log('listening on port 3001');
  });
});