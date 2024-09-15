const express = require("express");
const prompt = require("prompt-sync")({ sigint: true });
const collaborate = require("./collaborate");
const getSettings = require("./setup").getSettings;

const PORT = process.env.PORT || 3001;

const app = express();

// Load setup from settings.json
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`Access server at localhost:${PORT}/`)
});