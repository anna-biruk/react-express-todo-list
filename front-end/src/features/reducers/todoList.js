import {
    CREATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    GET_TODOS_ITEMS, GET_TODOS_ITEMS_ERROR, GET_TODOS_ITEMS_FINISH, GET_TODOS_ITEMS_START,
    UPDATE_TODO_ITEM
} from "../actions/types";

const initialState = {
    items: [],
    loading: false
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_ITEMS:
            return {...state, ...action.payload}
        case CREATE_TODO_ITEM:
            return {
                items: [
                    ...state.items,
                    action.payload, // { newTodoItem: {text:'dsada'} }
                ]
            }
        case GET_TODOS_ITEMS_START:
            return {...state, loading: true}
        case GET_TODOS_ITEMS_FINISH:
        case GET_TODOS_ITEMS_ERROR:
            return {...state, loading: false}
        case UPDATE_TODO_ITEM:
            const items = [...state.items].map(item => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.text;
                    item.checked = action.payload.checked
                }
                return item;
            });
            return {...state, items}

        case DELETE_TODO_ITEM:
            return {...state, items: state.items.filter((item) => item.id !== action.payload)}

        default:
            return state
    }
}

export default todoListReducer;



