import "../../../css/ProjectTasks.css";
import { useState, useRef } from "react";
export default function ProjectTasks({
  project,
  deleteProject,
  addTaskToProject,
}) {
  const taskRef = useRef("");

  function onSubmitHandler(e) {
    e.preventDefault();
    const projectId = project.id;
    const task = taskRef.current.value;
    if (task.trim()) {
      // Ensure the task isn't just whitespace
      addTaskToProject(projectId, task);
      taskRef.current.value = ""; // Reset the input field after submitting
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="project-container">
      <div className="project-header">
        <h1>{project.title}</h1>
        <button onClick={() => deleteProject(project.id)}>Delete</button>
      </div>
      <p className="project-date">{project.date.toLocaleDateString()}</p>
      <p className="project-description">{project.description}</p>
      <hr />
      <div>
        <div className="tasks-header">
          <h1>Tasks</h1>
          <div className="task-add">
            <input placeholder="Add Task" ref={taskRef} />
            <button type="submit">Add Task</button>
          </div>
        </div>
        <hr />
        <ul className="task-list">
          {project.tasks.map((task) => (
            <li key={task.id}>{task.title}</li> 
            

          ))}
        </ul>
      </div>
    </form>
  );
}
