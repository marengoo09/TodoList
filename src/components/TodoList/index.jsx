import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./style.css";
import { useContext } from "react";
import { TodoContext } from "../../contexts/todoContext";

export const TodoList = ({ children }) => {
  const {changeTodos } = useContext(TodoContext)
  return (
    <div className="todolist-container">
      <DragDropContext onDragEnd={changeTodos}>
        <Droppable droppableId="todos">
          {(provided)=>(
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {children}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
