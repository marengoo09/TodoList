import { useContext } from 'react';
import { FilterTodos } from '../FilterTodos';
import './style.css'
import { TodoContext } from '../../contexts/todoContext';
export const CompletedTodos = () => {
    const {todos, clearCompleted} = useContext(TodoContext)
    const itemLeft = todos.filter((item)=>!item.completed).length;

    return (
        <div className="completed-todos todolist-item border-bottom"> 
            <span>{itemLeft} item/s left</span>
            <FilterTodos />
            <span onClick={clearCompleted}>Clear completed</span>
        </div>
    )
}