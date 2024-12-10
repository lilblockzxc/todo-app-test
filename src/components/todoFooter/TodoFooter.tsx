import { FC } from "react";
import classNames from "classnames";
import styles from "./TodoFooter.module.scss";

import { useTodos } from "../../store/TodoContext";
import { FilteringType } from "../../utils";

export const TodoFooter: FC = () => {
  const { todos, filter, setFilter, clearCompleted } = useTodos();
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const handleFilterClick = (selectedFilter: FilteringType) =>
    setFilter(filter === selectedFilter ? "all" : selectedFilter);

  return (
    <div className={styles.footer}>
      <span>
        {itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left
      </span>
      <div className={styles.filters}>
        <button
          className={classNames(styles.filter, {
            [styles.active]: filter === "all",
          })}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={classNames(styles.filter, {
            [styles.active]: filter === "active",
          })}
          onClick={() => handleFilterClick("active")}
        >
          Active
        </button>
        <button
          className={classNames(styles.filter, {
            [styles.active]: filter === "completed",
          })}
          onClick={() => handleFilterClick("completed")}
        >
          Completed
        </button>
      </div>
      <button className={styles.clearCompleted} onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
