import { useEffect, useState } from "react";
import "./style.css";
import { FilterButton } from "../FilterButton";

const filters = [
  {
    value: "all",
    cond: function () {
      return true;
    },
  },
  {
    value: "active",
    cond: function (el) {
      return !el.completed;
    },
  },
  {
    value: "completed",
    cond: function (el) {
      return el.completed;
    },
  },
];

export const FilterTodos = ({
  item,
  todos,
  filteredTodos,
  setFilteredTodos,
}) => {
  const [filter, setFilter] = useState(filters[0]);
  const itemClass = `${item ? "todolist-item filter-todos-item" : "testt"}`;

  const updateFilter = () => {
    let newFilteredTodos = [...todos].filter(filter.cond);
    setFilteredTodos(newFilteredTodos)
  };

  useEffect(() => {
    if (!todos) return;
    updateFilter();
  }, [filter,todos]);

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
