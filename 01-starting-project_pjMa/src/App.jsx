import NewProject from "./components/NewProject";
import NoPrjSelect from "./components/NoPrjSelect";
import ProjectSibebar from "./components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedPjId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedPjId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function hanldeDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPjId: id,
      };
    });
  }

  function hanldeStartAppProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPjId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPjId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedPjId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPjId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedPjId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedPjId
  );
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={hanldeDeleteTask}
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedPjId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedPjId === undefined) {
    content = <NoPrjSelect onStartAddProject={hanldeStartAppProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSibebar
        onStartAddProject={hanldeStartAppProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedPjId}
      />
      {content}
    </main>
  );
}

export default App;
