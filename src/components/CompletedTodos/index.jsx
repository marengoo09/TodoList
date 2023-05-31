import { useContext } from 'react';
import { FilterTodos } from '../FilterTodos';
import './style.css'
import { TodoContext } from '../../contexts/todoContext';
export const CompletedTodos = () => {
    const {todos,setTodos, filteredTodos, setFilteredTodos} = useContext(TodoContext)
    const itemLeft = filteredTodos.filter((item)=>!item.completed).length;
    const handleClick = () => {
        let newTodos = [...todos];
        newTodos = newTodos.filter(element=>!element.completed)
        setTodos(newTodos);
    }
    return (
        <div className="completed-todos todolist-item border-bottom"> 
            <span>{itemLeft} items left</span>
            <FilterTodos todos={todos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos}/>
            <span onClick={handleClick}>Clear completed</span>
        </div>
    )
}