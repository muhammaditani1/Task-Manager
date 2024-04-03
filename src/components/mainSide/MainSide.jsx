import ProjectTasks from "../mainSide/projectSection/ProjectTasks";
import FillProject from "../mainSide/projectSection/FillProject";
import EmptyProjects from "../mainSide/projectSection/EmptyProjects";
export default function MainSide({
  projectArray,
  addProject,
  addTaskToProject,
  activateTask,
  CreateProject,
  visibleDetails,
  selectedProject, // Accept selectedProject prop
  deleteProject,
}) {
  
  return (
    <div className="main-side">
      {!visibleDetails && !activateTask && projectArray.length === 0 && (
        <EmptyProjects
          CreateProject={CreateProject}
          projectArray={projectArray}
        />
      )}
      {visibleDetails && !activateTask && (
        <FillProject
          addProject={addProject}
          projectArray={projectArray}
          CreateProject={CreateProject}
        />
      )}
      {activateTask && projectArray.length !== 0 && (
        <ProjectTasks
          project={selectedProject}
          deleteProject={deleteProject}
          addTaskToProject={addTaskToProject}
        /> // Pass selectedProject to ProjectTasks
      )}
    </div>
  );
}
