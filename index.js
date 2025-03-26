const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config(); 
const port = process.env.PORT || 3000; 
const todoController = require('./controllers/todoController');

app.use(express.json());

app.get('/todos', todoController.getTodos);

app.get('/todos/:id', todoController.getTodo);

app.delete('/todos/:id', todoController.removeTodo);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
