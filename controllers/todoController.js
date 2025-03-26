const todoService = require("../services/todoService");

let todos = [];

exports.getTodos = async (req, res) => {
  try {
    todos = await todoService.getExternalTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Oops, server sends 500 error" });
  }
};

exports.getTodo = (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const todo = todos.find((item) => item.id === +id);

    if (!todo) {
      return res.status(404).json({ message: "Oops, no Todo with this id" });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching the todo" });
  }
};

exports.removeTodo = (req, res) => {
  try {
    const { id } = req.params;
    const index = todos.findIndex((todo) => todo.id === +id);

    if (index === -1) {
      return res.status(404).json({ message: "Oops, no Todo with this id" });
    }
    todos.splice(index, 1);
    res.status(204);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching the todo" });
  }
};
