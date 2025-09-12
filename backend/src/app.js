const express = require("express");

const app = express();

// Test route
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
