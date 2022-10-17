const todoListRepository = require('../repositories/todolist.repository')

class TodoListService {
    async getAllItems(limit = 10, offset = 0) {
        const items = await todoListRepository.getAllItems(limit, offset);
        return items
    }

    async createItem(todoItem) {
        const newTodoItem = await todoListRepository.createItem(todoItem)
        return newTodoItem
    }

    async updateItem(todoItem) {
        const newItem = await todoListRepository.updateItem(todoItem);
        return newItem
    }
    async deleteItem(todoItem){
        const item = await todoListRepository.deleteItem(todoItem);
        return item
    }
}

module.exports = new TodoListService()