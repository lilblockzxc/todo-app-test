import { FC } from "react";

import styles from "./TodoList.module.scss";

import { useTodos } from "../../store/TodoContext";

export const TodoList: FC = () => {
  const { filteredTodos, toggleTodo } = useTodos();

  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={`${styles.itemText} ${
                todo.completed ? styles.completed : ""
              }`}
            >
              {todo.text}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
