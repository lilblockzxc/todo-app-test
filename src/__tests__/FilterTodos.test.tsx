import { ITodo } from "../app";
import { filterTodos } from "../utils";

const mockTodos: ITodo[] = [
  { id: 1, text: "Task 1", completed: false },
  { id: 2, text: "Task 2", completed: true },
];

test("Вывожу весь список задач ", () => {
  const result = filterTodos(mockTodos, "all");
  expect(result).toEqual(mockTodos);
});

test("Фильтрую только по активным задачам", () => {
  const result = filterTodos(mockTodos, "active");
  expect(result).toEqual([{ id: 1, text: "Task 1", completed: false }]);
});

test("Фильтрую только по завершенным задачам", () => {
  const result = filterTodos(mockTodos, "completed");
  expect(result).toEqual([{ id: 2, text: "Task 2", completed: true }]);
});
