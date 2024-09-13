const express = require("express");
const prompt = require("prompt-sync")({ sigint: true });

const PORT = process.env.PORT || 3001;

const app = express();

const passcode = prompt("Enter your passcode for this session: ")
app.get(`/${passcode}`, (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`Access server at localhost:${PORT}/${passcode}`)
});