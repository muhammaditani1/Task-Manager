import { useState, useEffect } from "react";
import MainSide from "./components/mainSide/MainSide";
import SideBar from "./components/SideBar";
function App() {
  // Array that will have Projects of type Object
  const [projectArray, setProjectArray] = useState([]);
  // this shows the  filled tasks page of a project
  const [tasksPage, setTasksPage] = useState(false);
  // this shows the createProject page
  const [projectDetailsVisible, setProjectDetailsVisible] = useState(false);
  // this to show what project is selected
  const [selectedProject, setSelectedProject] = useState({});

  function addTaskToProject(projectID, newTitle) {
    setProjectArray((currentItems) => {
      return currentItems.map((item) => {
        if (item.id !== projectID) {
          return item;
        }

        // Object to prepare for adding in tasks
        const newTasks = {
          id: Date.now(), // Use current timestamp to ensure uniqueness
          title: newTitle,
        };

        // Return a new object with the updated Task array
        return {
          ...item,
          tasks: [...item.tasks, newTasks], // Add new Tasks
        };
      });
    });
  }

  function onCreateProject(e) {
    setProjectDetailsVisible(true);
  }

  // this function pushes project into All Projects Array
  function onAddProject(project) {
    setProjectArray((prev) => [...prev, project]);
  }

  // setting task page to visible
  function onShowProjectDetails(project) {
    setSelectedProject(project);
    setTasksPage(true);
  }

  function onDeleteProject(id) {
    setProjectArray(projectArray.filter((project) => project.id !== id));

    // Reset the view if the deleted project is the currently selected one
    if (selectedProject.id === id) {
      //reset the selected project
      setSelectedProject({});
      setTasksPage(false);
      // Optionally, make projectDetailsVisible true if you want to show the project creation form immediately
      setProjectDetailsVisible(false); // or true, depending on your desired UX
    }
  }

  return (
    <div className="app-container">
      <SideBar
        projectArray={projectArray}
        CreateProject={onCreateProject}
        onSelectProject={onShowProjectDetails}
      />
      <MainSide
        projectArray={projectArray}
        addTaskToProject={addTaskToProject}
        addProject={onAddProject}
        activateTask={tasksPage}
        CreateProject={onCreateProject}
        visibleDetails={projectDetailsVisible}
        deleteProject={onDeleteProject}
        selectedProject={selectedProject} // Pass selected project to MainSide
      />
    </div>
  );
}
export default App;
