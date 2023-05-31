import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/todoContext";

export const filters = [
  {
    value: "all",
    cond: ()=>true,
  },
  {
    value: "active",
    cond: el=>!el.completed,
  },
  {
    value: "completed",
    cond: el=>el.completed,
  },
];

export const useFilter = ({todos,setFilteredTodos}) => {
  const [filter, setFilter] = useState(filters[0]);

  const updateFilter = () => {
    let newFilteredTodos = [...todos].filter(filter.cond);
    setFilteredTodos(newFilteredTodos)
  };

  useEffect(() => {
    if (!todos) return;
    updateFilter();
  }, [filter,todos]);

  return [filter,setFilter]
}