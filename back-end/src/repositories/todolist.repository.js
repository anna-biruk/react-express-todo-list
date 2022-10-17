const {TodoListModel} = require('../../models')

class TodolistRepository {
    async getAllItems(limit = 10, offset = 0) {
        const items = await TodoListModel.findAll({limit, offset})
        return items
    }

    async createItem(todoItem) {
        const newTodoItem = await TodoListModel.create({...todoItem, checked: false})
        return newTodoItem
    }

    async updateItem(todoItem) {
            const newItem = await TodoListModel.update(todoItem, {where: {id: todoItem.id}, returning: true})
        return newItem[1][0]
    }

    async deleteItem(todoItem) {
        const item = await TodoListModel.destroy({where: {id: todoItem.id}})
        return item
    }
}

module.exports = new TodolistRepository();