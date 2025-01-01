import { useState, useEffect } from "react";
import PopupWindow from "./PopupWindow";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="bg-gray-900 py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <div
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-blue-500 aspect-w-16 aspect-h-9"
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {expandedProject && (
        <PopupWindow
          isOpen={expandedProject !== null}
          onClose={() => setExpandedProject(null)}
          content={expandedProject ? projects[expandedProject - 1].details : ""}
        />
      )}
    </section>
  );
};

export default Projects;