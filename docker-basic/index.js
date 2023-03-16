const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>hello! It's Docker 🐳</h1>");
});

app.listen(8080, () => console.log("Server is running 🐋"));
