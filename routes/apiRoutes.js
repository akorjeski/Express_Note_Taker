// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const noteData = require("../db/db.json");
const fs = require("fs")
const path = require('path')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link


  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    // req.body is available since we're using the body parsing middleware
    noteData.push(req.body);
    fs.appendFile('../Express_Note_Taker/db/db.json', req.body, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
res.json(req.body)
    console.log(req.body)

  })
///deleting stuff, still testing
app.delete('/api/db', function (req, res) {
  let id = req.body.id
  console.log(`Deleting ${id}`)

  db.splice(id, 1)

  writeFileAsync(path.join(__dirname, '../db/db.json'), JSON.stringify(db))
      .then(() => {
          console.log(`Jobs done`)
      })

  res.json(id)
})

};
