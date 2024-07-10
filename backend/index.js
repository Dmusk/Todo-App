const express = require("express");

const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  res.send("Hello Their");
});

app.get("/todos", (req, res) => {
  res.send("Hello Their");
});

app.put("/completed", (req, res) => {
  res.send("Hello Their");
});

app.listen(4500);
