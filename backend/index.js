const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createpayload = req.body;
  const parsepayload = createTodo.safeParse(createpayload);

  if (!parsepayload.success) {
    res.status(403).json({
      msg: "Invalid input",
    });
    return;
  }
  //else put it in mongo DB;
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });

  res.json({
    msg: "Added Task Successfully",
  });
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({}); // Convert the cursor to an array
    res.json({
      todos,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Failed to fetch todos",
    });
  }
});

app.put("/completed", async (req, res) => {
  const createpayload = req.body;
  const parsepayload = updateTodo.safeParse(createpayload);

  if (!parsepayload.success) {
    res.status(403).json({
      msg: "Invalid Inputs",
    });
    return;
  }
  //else
  await todo.update(
    {
      id: req.body.id, //search for the stuff need to be updated
    },
    {
      completed: true, //update what to update
    }
  );

  res.json({
    msg: "Mark As Completed",
  });
});

app.listen(4500, () => {
  console.log("Server is Running on the port 4500");
});
