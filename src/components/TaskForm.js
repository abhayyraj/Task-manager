import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      const newTask = {
        id: new Date().getTime().toString(),
        title: task,
        completed: false,
      };
      addTask(newTask);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={handleTaskChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;