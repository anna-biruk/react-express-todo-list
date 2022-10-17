import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTodoListItems} from "../../features/actions";
import TodoListItem from "../TodoListItem/TodoListItem";
import Spinner from "../Spinner/Spinner";
import {selectIsLoading, selectSortedTodoItems} from "../../features/selectors";

const TodoList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodoListItems())
    }, [dispatch])

    const items = useSelector(selectSortedTodoItems)
    const isLoading = useSelector(selectIsLoading)

    return (
        <>
            {isLoading && <Spinner/>}

            {items.map((item) => {
                return (
                    <TodoListItem key={item.id} text={item.text} id={item.id} checked={item.checked}
                                  createdAt={item.createdAt}/>
                )
            })}
        </>
    )
}
export default TodoList