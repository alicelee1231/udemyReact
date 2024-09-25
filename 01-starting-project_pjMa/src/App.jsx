import NewProject from "./components/NewProject";
import NoPrjSelect from "./components/NoPrjSelect";
import ProjectSibebar from "./components/ProjectSidebar";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedPjId: undefined,
    projects: [],
  });

  function hanldeStartAppProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPjId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);

  let content;

  if (projectState.selectedPjId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedPjId === undefined) {
    content = <NoPrjSelect onStartAddProject={hanldeStartAppProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSibebar onStartAddProject={hanldeStartAppProject} />
      {content}
    </main>
  );
}

export default App;
