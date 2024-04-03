import "../css/SideBar.css";
export default function SideBar({
  projectArray,
  CreateProject,
  onSelectProject,
}) {
  // Function modified to accept project item
  function onShowTaskAdd(projectItem) {
    onSelectProject(projectItem); // Call onSelectProject with the project item
  }

  return (
    <div className="sidebar">
      <button className="add-project-btn" onClick={() => CreateProject(true)}>
        Add Project
      </button>
      <ul className="project-list">
        {projectArray.map((item) => (
          <li key={item.id}>
            <button className="project-btn" onClick={() => onShowTaskAdd(item)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
