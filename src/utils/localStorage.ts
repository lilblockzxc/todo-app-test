import { ITodo } from "../app";

const LOCAL_STORAGE_KEY = "todos";

export const loadTodos = (): ITodo[] => {
  const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
  try {
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      return parsedTodos; 
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const saveTodos = (todos: ITodo[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};