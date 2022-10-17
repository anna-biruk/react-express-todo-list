import TodoList from "../components/TodoList/TodoList";
import {createTodoItem} from "../features/actions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {selectTodoItems} from "../features/selectors";

const TodoListPage = () => {
    const dispatch = useDispatch();
    const [createInputValue, setCreateInputValue] = useState('');
    const items = useSelector(selectTodoItems)

    function isChecked(item) {
        return item.checked === true;
    }

    function unChecked(item) {
        return item.checked === false
    }

    let checkedItems = items.filter(isChecked).length;
    let unCheckedItems = items.filter(unChecked).length;

    const handleAddItem = (event) => {
        event.preventDefault()
        dispatch(createTodoItem(createInputValue))
        setCreateInputValue("")
    }

    const handleChange = (event) => {
        setCreateInputValue(event.target.value)
    }

    return (
        <div className="grid grid-cols-6">
            <div className="col-start-2 col-span-4">
                <form className="w-1/3 mx-auto mt-10 flex" onSubmit={handleAddItem}>
                    <input
                        value={createInputValue}
                        type="text"
                        onChange={handleChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Add your plans"
                    />
                    <button
                        className="px-4 py-2 text-sm text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700 active:shadow-lg"
                    >
                        Add
                    </button>
                </form>
                <TodoList/>
            </div>
            <div className="col-span-1">
                <div
                    className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm items-center flex flex-row mr-10 p-5">
                    All items: {items.length} <br/>
                    To do: {unCheckedItems}<br/>
                    Done: {checkedItems}
                </div>
            </div>
        </div>
    )
}

export default TodoListPage