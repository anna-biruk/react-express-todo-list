import './App.css';
import TodoListPage from "./pages/TodoList";

function App() {

    return (
        <div>
            <header>
                <div className="text-4xl font-bold mx-auto w-fit">Todo List</div>
            </header>
            <TodoListPage/>

        </div>
    );
}

export default App;