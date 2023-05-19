import { FilterTodos } from '../FilterTodos';
import './style.css'
export const CompletedTodos = ({todos,setTodos, filteredTodos, setFilteredTodos}) => {
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