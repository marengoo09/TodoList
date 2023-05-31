import { Header } from "./components/Header";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { FilterTodos } from "./components/FilterTodos";
import { DragDrop } from "./components/DragDrop";
import { TodoItem } from "./components/TodoItem";
import { CompletedTodos } from "./components/CompletedTodos";
import { TodoLoading } from "./components/TodoLoading";
import { TodoContext } from "./contexts/todoContext";
import { useContext } from "react";

export const AppUI = () => {
  const { loading, error, todos, filteredTodos, filter } = useContext(TodoContext);
  return (
    <Header>
      <AddTodo />

      <TodoList>
        {loading && <TodoLoading />}

        {error && <p>An error ocurred...</p>}

        {!loading && todos.length === 0 && filter.value=='all' && (
          <TodoItem content={"Create your first todo..."}></TodoItem>
        )}

        {filteredTodos &&
          filteredTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              completed={todo.completed}
              id={todo.id}
              content={todo.content}
              index={index}
            />
          ))}
      </TodoList>
      <CompletedTodos />
      <FilterTodos item />
      <DragDrop />
    </Header>
  );
};
