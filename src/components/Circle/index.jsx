import './style.css'
export const Circle = ({input, id, completed, completeTodo}) => {
    const classList = `circle ${completed ?'circle-bg':''} ${input ?'circle-input':''}`

    const handleClick = () => {
        if(!id) return
        completeTodo(id)
    }
    return (
        <div className={classList} onClick={handleClick}>
            {completed && <span className='circle-check'></span>}
        </div>  
    )
}