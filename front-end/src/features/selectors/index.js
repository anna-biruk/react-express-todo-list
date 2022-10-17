export const selectSortedTodoItems = (state) => {
    return state.todo.items.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export const selectIsLoading = (state) => {
    return state.todo.loading
}

export const selectTodoItems = (state) => {
    return state.todo.items
}


