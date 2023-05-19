import { Circle } from "../Circle";
import "./style.css";
export const AddTodo = ({ todos, setTodos, inputValue, setInputValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };
  const genId = () => {
    return todos[todos.length-1]?.id + 1 || 1;
  }
  const addTodo = () => {
    if (inputValue == "") return;
    const newTodos = [...todos];
    newTodos.push({
      id: genId(),
      content: inputValue,
      completed: false,
    });
    setTodos(newTodos)
    setInputValue('')
  };
  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <div>
        <Circle input />
        <input
          className="todolist-item"
          type="text"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  );
};
