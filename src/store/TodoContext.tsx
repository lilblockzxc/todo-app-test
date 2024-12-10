import {
  useContext,
  useState,
  FC,
  ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { loadTodos, saveTodos } from "../utils/localStorage";
import { ITodo } from "../app";
import { FilteringType, filterTodos } from "../utils";
import { TodoContext } from "./context";
import { TodoContextType } from "./interfaces";

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(() => loadTodos());
  const [filter, setFilter] = useState<FilteringType>("all");

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = useCallback(
    (text: string) =>
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, completed: false },
      ]),
    []
  );

  const toggleTodo = useCallback(
    (id: number) =>
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      ),
    []
  );

  const clearCompleted = useCallback(
    () => setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed)),
    []
  );

  const filteredTodos = useMemo(
    () => filterTodos(todos, filter),
    [todos, filter]
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        addTodo,
        toggleTodo,
        clearCompleted,
        setFilter,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext) as TodoContextType;
