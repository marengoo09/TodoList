import "./style.css";

import { Circle } from "../Circle";

import classNames from "classnames";
import { CompletedTodos } from "../CompletedTodos";

const DeleteTodo = ({todos, setTodos, todoId }) => {
  const handleClick = () => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((el) => el.id === todoId);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return <span onClick={handleClick} className="delete-todo"></span>;
};

export const TodoList = ({ filteredTodos, setFilteredTodos, todos, setTodos }) => {
  
  return (
    <div className="todolist-container">
      <ul>
        {filteredTodos &&
          filteredTodos.map((el, index) => {
            return (
              <li
                className={classNames({
                  "border-top": index === 0,
                  "text-lined": el.completed,
                  "todolist-item": true,
                })}
                key={el.id}
              >
                <Circle
                  completed={el.completed}
                  todoId={el.id}
                  todos={todos}
                  setTodos={setTodos}
                />
                <span className="todolist-content">{el.content}</span>
                <DeleteTodo todoId={el.id} todos={todos} setTodos={setTodos} />
              </li>
            );
          })}
      </ul>
      <CompletedTodos filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
};
