import EditModal from "../EditModal/EditModal";
import {useState} from "react";
import {deleteTodoItem, updateTodoItem} from "../../features/actions";
import {useDispatch} from "react-redux";
import {PencilIcon, TrashIcon} from '@heroicons/react/outline'

const TodoListItem = ({text, id, checked, createdAt}) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)


    const handleUpdate = ({text}) => {
        dispatch(updateTodoItem({text, id}))
    }
    const handleDeleteItem = () => {
        dispatch(deleteTodoItem(id))
    }

    const handleCheck = (event) => {
        dispatch(updateTodoItem({id, checked: event.target.checked}))
    };
    return (
        <>
            <div
                className="w-1/3 h-10 max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm items-center flex flex-row   mx-auto">
                <input id="default-checkbox" type="checkbox" checked={checked} onChange={handleCheck}
                       className=" ml-2 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-checkbox"
                       className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${checked === true ? "line-through" : ""}`}>{text}</label>

                <div className="ml-auto">
                    <button onClick={() => setOpen(true)} className="mr-5"><PencilIcon width={20}/></button>
                    <button onClick={handleDeleteItem} className="mr-5"><TrashIcon width={20}/></button>
                </div>
            </div>
            <EditModal open={open} todoListItem={{text}} onClose={() => setOpen(false)} onEdit={handleUpdate}/>
        </>
    )
}

export default TodoListItem