const express = require("express");
const prompt = require("prompt-sync")({ sigint: true });
const collaborate = require("./collaborate");

const PORT = process.env.PORT || 3001;

const app = express();


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`Access server at localhost:${PORT}/`)
});