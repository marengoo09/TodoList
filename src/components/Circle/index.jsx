import './style.css'
export const Circle = ({completed, input, todos, setTodos, todoId}) => {
    const classList = `circle ${completed ?'circle-bg':''} ${input?'circle-input':''}`
    const handleClick = () => {
        if(input) return;
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(el=>el.id===todoId)
        newTodos[todoIndex].completed=!newTodos[todoIndex].completed
        setTodos(newTodos)
    }
    return (
        <div className={classList} onClick={handleClick}>
            {completed && <span className='circle-check'></span>}
        </div>  
    )
}