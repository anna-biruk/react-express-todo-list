import {combineReducers} from "redux";
import todoListReducer from "./todoList";


const rootReducer = combineReducers({
    todo: todoListReducer
})

export default rootReducer;