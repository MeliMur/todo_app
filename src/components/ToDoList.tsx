import * as React from "react";
import { useEffect, useState } from "react";
import { ITask, ToDoItem } from "./ToDoItem";
import "./styles/ToDoList.scss";

export const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const removeListItem = (indexToRemove: number) => {
    setTasks(tasks.filter((item, index) => index !== indexToRemove));
  };

  const toggleItemState = (indexToMark: number) => {
    const task = tasks.find((item, index) => index === indexToMark);
    if (task) {
      task.isCompleted = !task.isCompleted;
      setTasks([...tasks]);
    }
  };

  const addTask = (listItem: string) => {
    if (listItem) {
      setTasks([
        ...tasks,
        {
          isCompleted: false,
          text: listItem
        }
      ]);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    if (event.key === "Enter") {
      addTask(input);
      event.currentTarget.value = "";
    }
  };

  return (
    <>
      <input
        className="app__todo__input"
        placeholder="Press enter to add todo items to the list"
        onKeyDown={e => keyDownHandler(e)}
      />
      <ul className="app__todo__list">
        {tasks.map((item, index) => (
          <ToDoItem
            key={index}
            task={item}
            removeTask={() => removeListItem(index)}
            toggleTask={() => toggleItemState(index)}
          />
        ))}
      </ul>
    </>
  );
};
