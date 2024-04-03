import TaskImg from "../../../assets/no-projects.png";
import "../../../css/EmptyProject.css";
export default function EmptyProjects({ CreateProject, projectArray }) {
  return (
    <div className="emptyDiv">
      <img src={TaskImg} alt="No Tasks Image" />
      <h1>
        {projectArray.length > 0 ? "Select A Project" : "No Project Selected"}
      </h1>
      <h2>Get Started With A New Project</h2>
      <button onClick={() => CreateProject(true)}>Create New Project</button>
    </div>
  );
}
