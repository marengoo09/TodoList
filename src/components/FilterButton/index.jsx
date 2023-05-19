export const FilterButton = ({handleClick, value, active}) => {
    return (
        <span onClick={handleClick} value={value} className={`filter ${active?'active':''}`}>{value}</span>
    )
}