const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World from Docker!");
});

app.get("/test", (req, res) => {
  res.send("New test api endpoint");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


