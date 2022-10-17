import {
    GET_TODOS_ITEMS,
    CREATE_TODO_ITEM,
    UPDATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    GET_TODOS_ITEMS_START, GET_TODOS_ITEMS_FINISH, GET_TODOS_ITEMS_ERROR
} from "./types";
import axios from "axios";

const apiUrl = "http://localhost:3000/api/list-items"

export const getTodoListItems = () => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_TODOS_ITEMS_START})
            const response = await axios.get(apiUrl)
                dispatch({
                    type: GET_TODOS_ITEMS,
                    payload: response.data // { items: [] }
                })
            dispatch({type: GET_TODOS_ITEMS_FINISH})
        } catch (e) {
            dispatch({type: GET_TODOS_ITEMS_ERROR, payload: e.message})
        }
    }
}

export const createTodoItem = (text) => {
    return async (dispatch) => {
        const response = await fetch(apiUrl, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: (JSON.stringify({
                text
            }))
        });
        const item = await response.json();
        dispatch({
            type: CREATE_TODO_ITEM,
            payload: item.newTodoItem
        })
    }
}

export const updateTodoItem = ({text, id, checked}) => {
    return async (dispatch) => {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text, checked})
        });

        const item = await response.json();
        dispatch({
            type: UPDATE_TODO_ITEM,
            payload: item.newItem
        })
    }
}

export const deleteTodoItem = (id) => {
    return async (dispatch) => {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const responseBody = await response.json();
        if (responseBody.success) {
            dispatch({
                type: DELETE_TODO_ITEM,
                payload: id
            })
        }
    }

}


