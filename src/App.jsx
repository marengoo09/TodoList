import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTodo } from "./components/AddTodo";

import { defaultTodos } from "../todos";
import { TodoList } from "./components/TodoList";
import { FilterTodos } from "./components/FilterTodos";
import { DragDrop } from "./components/DragDrop";

function App() {
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState(defaultTodos);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if(theme=='light'){
      document.body.classList.remove("theme-dark");
    }else{
      document.body.classList.add("theme-dark");
    }
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme}>
        <AddTodo todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
        <TodoList
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
        <FilterTodos item />
        <DragDrop />
      </Header>
    </>
  );
}

export default App;
