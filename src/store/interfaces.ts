import { ITodo } from "../app";
import { FilteringType } from "../utils";

export interface TodoContextType  {
  todos: ITodo[];
  filter: FilteringType;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilteringType) => void;
  filteredTodos: ITodo[];
};

