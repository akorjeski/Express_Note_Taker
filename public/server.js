// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Notes Saved (DATA)
var notesSaved = [
  {title:"Test Title",text:"Test text",id:1},
  {title:"Fishingwoman",text:"Fishingwoman Text!!", id:2}
];

// Routes for HTML pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });
  

// Displays all notes
app.get("/api/notesSaved", function(req, res) {
  return res.json(notesSaved);
});

// Displays a single note, or returns false
app.get("/api/notesSaved/:notesSaved", function(req, res) {
  var chosen = req.params.notesSaved;

  console.log(chosen);

  for (var i = 0; i < notesSaved.length; i++) {
    if (chosen === notesSaved[i].title) {
      return res.json(notesSaved[i]);
    }
  }

  return res.json(false);
});



// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
