import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useFilter } from "../hooks/useFilter";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const [filter,setFilter] = useFilter({todos,setFilteredTodos})

  const completeTodo = (id) => {
    if (!id) return;
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((el) => el.id === id);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((el) => el.id === id);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const genId = (max,min) => Math.floor(Math.random() * (max - min + 1)) + min;

  const addTodo = (todoValue) => {
    const newTodo = {
      id: genId(1,999999),
      content: todoValue,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  function changeTodos(result) {
    if (!result.destination) return;
    
    const from = result.source.index;
    const to = result.destination.index;

    const newTodos = [...todos];
    const [reorderedItem] = newTodos.splice(from, 1);
    newTodos.splice(to, 0, reorderedItem);

    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        loading,
        error,
        filteredTodos,
        setFilteredTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        changeTodos,
        filter,
        setFilter
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
