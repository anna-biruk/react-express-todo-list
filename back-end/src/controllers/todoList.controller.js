const todoListService = require('../servises/todoList.service')

class TodoListController {
    async getAllItems(req, res) {
        try {
            const items = await todoListService.getAllItems(req.query.limit, req.query.offset)
            return res.status(200).json({
                items,
            });
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    async createItem(req, res) {
        try {
            const {text} = req.body
            const newTodoItem = await todoListService.createItem({text})
            return res.status(201).json({
                newTodoItem
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: error.message})
        }
    }

    async updateItem(req, res) {
        try {
            const {id} = req.params
            const {text, checked} = req.body
            const newItem = await todoListService.updateItem({text, id, checked})
            return res.status(200).json({
                newItem
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: error.message})
        }

    }

    async deleteItem(req, res) {
        try {
            const {id} = req.params
            await todoListService.deleteItem({id})
            return res.status(200).json({
                success: true
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: error.message})
        }

    }
}


module.exports = new TodoListController();