import classNames from "classnames";
import { Circle } from "../Circle";

import "../../../public/images/icon-cross.svg";
import "./style.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import { TodoContext } from "../../contexts/todoContext";
import { Draggable } from "react-beautiful-dnd";
import { useScrolling } from "../../hooks/useScrolling";

export const TodoItem = ({ content, completed, id, index }) => {
  const { completeTodo, deleteTodo, filter } = useContext(TodoContext);

  const { isScrolling, containerRef, handleMouseEnter, handleMouseLeave } =
    useScrolling();

  const listItem = (
    <li
      className={classNames({
        "text-lined": completed,
        "todolist-item": true,
      })}
    >
      <Circle completed={completed} id={id} completeTodo={completeTodo} />
      <span className="todolist-content">{content || <Skeleton />}</span>
      <span onClick={() => deleteTodo(id)} className="delete-todo"></span>
    </li>
  );

  return (
    <>
      {!id ? (
        listItem
      ) : (
        <Draggable
          draggableId={id.toString()}
          index={index}
          isDragDisabled={filter.value !== "all"}
        >
          {(provided) => (
            <li
              ref={provided?.innerRef}
              {...provided?.draggableProps}
              {...provided?.dragHandleProps}
              className={classNames({
                "text-lined": completed,
                "todolist-item": true,
              })}
            >
              <Circle
                completed={completed}
                id={id}
                completeTodo={completeTodo}
              />
              <span
                className={`todolist-content ${isScrolling ? "scrolling" : ""}`}
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {content || <Skeleton />}
              </span>
              <span
                onClick={() => deleteTodo(id)}
                className="delete-todo"
              ></span>
            </li>
          )}
        </Draggable>
      )}
    </>
  );
};
