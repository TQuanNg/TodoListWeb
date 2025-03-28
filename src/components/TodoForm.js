import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent loading default

    if (!value) return;

    addTodo(value);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="TodoInput"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="todo-add-task-btn">
        Add Task
      </button>
    </form>
  );
};
