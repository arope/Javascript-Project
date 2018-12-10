// The API toolkit for making REST systems easily
const express = require('express');
// A good solution for handling JSON data in routes
const bodyParser = require('body-parser');
// Node JS modules for filesystem access
const fs = require('fs');
// Our database connection
// This will be a JSON object of our programmers
// and can be accessed as if it was any other javascript
// object
const database = require('./programmers.json');

// Make an instance of our express application
const app = express();
// Specify our > 1024 port to run on
const port = 3000;

// Apply our middleware so our code can natively handle JSON easily
app.use(bodyParser.json());

// We must have our list of programmers to use
if (!fs.existsSync('./programmers.json')) {
  throw new Error('Could not find database of programmers!');
}

// Build our routes

app.get('/', (req, res) => {
  //res.send('Fill me in to return ALL programmers!');
  res.json(database)
});

app.get('/:id', (req, res) => {
  const id = req.params.id;

//  res.send(`Fill me in to return values with ID: ${id}`);

//  for (user in database){
     if (id == database["SID"]) {
       console.log(database["firstName"]);
       res.json(database["lastName"])
     }
  //     res.sendStatus(200);
    else {
      res.send (`Could not find that slave with that SID`)
    //  throw new Error ('Could not find that ID');
    }
});

app.put('/:id', (req, res) => {
  const id = req.params.id;
//  res.send(`Fill me in to update values with ID: ${id}`);
  console.log(id);
  database["SID"] = id;
  console.log(database["SID"])
  res.sendStatus(200)
});

// app.post('/', (req, res) => {
//   const body = req.body; // Hold your JSON in here!
//
//   res.send(`You sent: ${body}`);
// });

app.post('/', (req,res) => {
      //  const body = req.body; //holds JSON
        console.log(req.body);
        database[req.body.lastName] = req.body
        //console.log(database["lastName"])
        res.sendStatus(200)
 });
// IMPLEMENT A ROUTE TO HANDLE ALL OTHER ROUTES AND RETURN AN ERROR MESSAGE

app.listen(port, () => {
  console.log(`She's alive on port ${port}`);
});
