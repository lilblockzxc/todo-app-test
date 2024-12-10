import { FC } from "react";

import styles from "./App.module.scss";
import { TodoHeader } from "../components/todoHeader/TodoHeader";
import { TodoList } from "../components/todoList/TodoList";
import { TodoFooter } from "../components/todoFooter/TodoFooter";

import { TodoProvider } from "../store/TodoContext";

export const App: FC = () => {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <div className={styles.todoApp}>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </div>
      </div>
    </TodoProvider>
  );
};
