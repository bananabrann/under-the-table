const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("We made it!");
});

app.listen(3000, () => {
  console.log("Live on port 8000...");
});
