const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createpayload = req.body;
  const parsepayload = createTodo.safeParse(createpayload);

  if (!parsepayload.success) {
    res.status(403).json({
      msg: "Invalid input",
    });
    return;
  }
  //else put it in mongo DB;
});

app.get("/todos", (req, res) => {
  res.send("Hello Their");
});

app.put("/completed", (req, res) => {
  const createpayload = req.body;
  const parsepayload = updateTodo.safeParse(createpayload);

  if (!parsepayload.success) {
    res.status(403).json({
      msg: "Invalid Inputs",
    });
    return;
  }
  //else
});

app.listen(4500);
