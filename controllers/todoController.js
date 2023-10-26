const db = require('../models');

class TodoController {
    async getAllTodolist(request, response) {
        try {
            const todo = await db.todolist.findAll();
            return response.status(200).json({
                message: 'Get All Todolist Successfully',
                data: todo
            });
        } catch (error) {
            response.status(500).json({
                message: 'Get All Todolist Failed'
            });
        }
    }

    async getTodoById(request, response) {
        const id = request.params.id;
        try {
            const todo = await db.todolist.findByPk(id);
            if(!todo) {
                return response.status(404).json({
                    message: 'Todo Not Found'
                });
            }
            return response.status(200).json({
                message: `Get Todo Successfully at ID: ${id}`,
                data: todo
            });
        } catch (error) {
            response.status(500).json({
                message: `Get Todo Failed at ID : ${id}`
            });
        }
    }

    async createTodo(request, response) {
        try {
            const todo = await db.todolist.create(request.body);
            return response.status(200).json({
                message: 'Todo Created Successfully',
                data: todo
            });
        } catch (error) {
            response.status(500).json({
                message: 'Todo Created Failed'
            });
        }
    }

    async updateTodoById(request, response) {
        const id = request.params.id;
        try {
            const todo = await db.todolist.findByPk(id);
            if (!todo) {
                return response.status(404).json({
                    message: 'Todo Not Found'
                });
            }
            const updatedTodo = await db.todolist.update(request.body, {where: { id: id }});
            return response.status(200).json({
                message: `Todo Updated Successfully at ID: ${id}`,
                data: updatedTodo
            });
        } catch (error) {
            response.status(500).json({
                message: `Todo Updated Failed at ID: ${id}`
            });
        }
    }

    async deleteTodoById(request, response) {
        const id = request.params.id;
        try {
            const todo = await db.todolist.findByPk(id);
            if (!todo) {
                return response.status(404).json({
                    message: 'Todo Not Found'
                });
            }
            await todo.destroy();
            return response.status(200).json({
                message: `Todo Deleted Successfully at ID: ${id}`
            });
        } catch (error) {
            response.status(500).json({
                message: `Todo Deleted Failed at ID: ${id}`
            });
        }
    }

    async getTodoPagination(request, response) {
        const page = parseInt(request.query.page) || 1;
        const limit = parseInt(request.query.limit) || 10;
        const startIndex = (page - 1) * limit;
    
        try {
            const { count, rows } = await db.todolist.findAndCountAll({
                limit,
                offset: startIndex
            });
    
            const results = {
                totalItems: count,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            };
    
            if (startIndex > 0) {
                results.previousPage = page - 1;
            }
    
            if (startIndex + limit < count) {
                results.nextPage = page + 1;
            }
    
            results.results = rows;
            response.status(200).json({
                message: 'Get Todolist Pagination Successfully',
                data: results
            });
        } catch (error) {
            console.error(error);
            response.status(500).json({
                message: 'Get Todolist Pagination Failed'
            });
        }
    }
    
}

module.exports = TodoController;