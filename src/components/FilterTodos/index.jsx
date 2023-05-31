import "./style.css";
import { FilterButton } from "../FilterButton";
import { filters } from "../../hooks/useFilter";
import { useContext } from "react";
import { TodoContext } from "../../contexts/todoContext";

export const FilterTodos = ({item}) => {
  const {filter,setFilter} = useContext(TodoContext)
  const itemClass = `${item ? "todolist-item filter-todos-item" : ""}`;

  const handleClick = (event) => {
    const value = event.target.getAttribute("value");
    const newFilter = filters.find((el) => el.value === value);
    setFilter(newFilter);
  };

  return (
    <div className={`filter-todos border-top ${itemClass} border-bottom`}>
      {filters.map((el, index) => (
        <FilterButton
          key={index}
          handleClick={handleClick}
          value={el.value}
          active={filter.value === el.value}
        />
      ))}
    </div>
  );
};
