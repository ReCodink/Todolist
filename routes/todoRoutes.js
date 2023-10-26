const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController');
const todoController = new TodoController();


// Rute untuk mendapatkan semua todolist
router.get('/api/todolist', todoController.getAllTodolist);

// Rute untuk mendapatkan todo berdasarkan ID
router.get('/api/todolist/:id', todoController.getTodoById);

// Rute untuk membuat todo baru
router.post('/api/todolist', todoController.createTodo);

// Rute untuk mengupdate todo berdasarkan ID
router.put('/api/todolist/:id', todoController.updateTodoById);

// Rute untuk menghapus todo berdasarkan ID
router.delete('/api/todolist/:id', todoController.deleteTodoById);

// Rute untuk mendapatkan todolist dengan paginasi
router.get('/api/todolist/pagination', todoController.getTodoPagination);

module.exports = router;
