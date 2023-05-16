import React from 'react';

function TaskList({ title, tasks, toggleTaskStatus, deleteTask }) {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskStatus(task.id)}
                />
                <span className={task.completed ? 'completed' : ''}>{task.title}</span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default TaskList;
 
  