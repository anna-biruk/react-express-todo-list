const {Router} = require("express")
const todoListController = require("../controllers/todoList.controller.js")

const router = Router();

router.get("/list-items", todoListController.getAllItems)
router.post("/list-items", todoListController.createItem)
router.put("/list-items/:id", todoListController.updateItem)
router.delete("/list-items/:id", todoListController.deleteItem)

module.exports = router