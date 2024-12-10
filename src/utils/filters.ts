import { ITodo } from "../app";
import { FilteringType } from "./types";



export const filterTodos = (
  todos: ITodo[],
  filter: FilteringType
): ITodo[] => {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
