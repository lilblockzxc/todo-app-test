import { FC, useState } from "react";
import styles from "./TodoHeader.module.scss";

import { useTodos } from "../../store/TodoContext";

export const TodoHeader: FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleAddNewTodo = () =>
    text.trim() && (addTodo(text.trim()), setText(""));

  return (
    <div className={styles.header}>
      <div className={styles.title}>Todos</div>
      <input
        type="text"
        className={styles.input}
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={styles.addButton}
        onClick={handleAddNewTodo}
        disabled={!text}
      >
        Add
      </button>
    </div>
  );
};
