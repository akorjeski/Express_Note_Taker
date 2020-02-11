var express = require("express");
var path = require("path");

module.exports = function(app) {

    app.use("/makeNotesJS", express.static(path.join(__dirname, "../public/assets/js/makeNotes.js")))
    app.use("/index", express.static(path.join(__dirname, "../public/assets/js/index.js")))
    app.use("/style", express.static(path.join(__dirname, "../public/assets/css/styles.css")))
}