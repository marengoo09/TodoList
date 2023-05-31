import { useContext, useState } from "react";
import { Circle } from "../Circle";
import "./style.css";
import { TodoContext } from "../../contexts/todoContext";
export const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue == "") return;
    addTodo(inputValue);
    setInputValue('')
  };
  
  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <div>
        <Circle input/>
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
