import React, { useContext, useState } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ProjectModal from "../../components/projectModal/ProjectModal";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!bigProjects.display) {
    return null;
  }

  function handleProjectClick(project) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  const getTechIcon = (techName) => {
    const techMap = {
      "Spring Boot": "fab fa-java",
      "Spring Security": "fab fa-java",
      "JWT": "fas fa-shield-alt",
      "PostgreSQL": "fas fa-database",
      "JPA/Hibernate": "fas fa-layer-group",
      "React": "fab fa-react",
      "Axios": "fas fa-globe",
      "Git/GitHub": "fab fa-git-alt",
      "C#": "fab fa-microsoft",
      ".NET": "fab fa-microsoft",
      ".NET 7.0": "fab fa-microsoft",
      ".NET 8.0": "fab fa-microsoft",
      "ASP.NET": "fab fa-microsoft",
      "ASP.NET Core MVC": "fab fa-microsoft",
      "ASP.NET Core Identity": "fas fa-user-shield",
      "Identity Framework": "fas fa-user-shield",
      "Razor Pages": "fab fa-microsoft",
      "Entity Framework Core": "fas fa-database",
      "SQL Server": "fas fa-database",
      "MSSQL": "fas fa-database",
      "HTML/CSS": "fab fa-html5",
      "HTML": "fab fa-html5",
      "CSS": "fab fa-css3-alt",
      "CSS3": "fab fa-css3-alt",
      "HTML5": "fab fa-html5",
      "Bootstrap": "fab fa-bootstrap",
      "Bootstrap 5": "fab fa-bootstrap",
      "JavaScript": "fab fa-js",
      "jQuery": "fab fa-js",
      "Node.js": "fab fa-node-js",
      "Jitsi Meet": "fas fa-video",
      "StackBlitz": "fas fa-code",
      "iyzico": "fas fa-credit-card"
    };
    
    // Try to find exact match first
    if (techMap[techName]) {
      return techMap[techName];
    }
    
    // Try partial match
    for (const [key, icon] of Object.entries(techMap)) {
      if (techName.includes(key) || key.includes(techName)) {
        return icon;
      }
    }
    
    return "fas fa-code"; // Default icon
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          {bigProjects.subtitle && (
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>
          )}

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <Fade
                  key={i}
                  bottom
                  duration={500}
                  delay={i * 100}
                  distance="20px"
                >
                  <div
                    className={`project-card-wrapper ${
                      isDark ? "dark-mode" : ""
                    }`}
                  >
                    <div
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                      onClick={() => handleProjectClick(project)}
                    >
                      {project.image ? (
                        <div className="project-image">
                          <img
                            src={project.image}
                            alt={project.projectName}
                            className={`card-image ${project.projectName === "EduHub" ? "eduhub-logo" : ""}`}
                          ></img>
                        </div>
                      ) : null}
                      <div className="project-detail">
                        <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {project.projectName}
                        </h5>
                        <p
                          className={
                            isDark ? "dark-mode card-subtitle" : "card-subtitle"
                          }
                        >
                          {project.projectDesc}
                        </p>

                        {/* Teknoloji Rozetleri */}
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="project-technologies">
                              {project.technologies.slice(0, 3).map((tech, idx) => (
                                <span
                                  key={idx}
                                  className={`tech-badge-small ${
                                    isDark ? "dark-mode" : ""
                                  }`}
                                >
                                  <i className={getTechIcon(tech)}></i>
                                  <span>{tech}</span>
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span
                                  className={`tech-badge-small more-badge ${
                                    isDark ? "dark-mode" : ""
                                  }`}
                                >
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                        {/* Detay Butonu */}
                        <div className="project-detail-btn">
                          <span className="detail-btn-text">
                            <i className="fas fa-arrow-right"></i>
                            Detayları Gör
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Fade>
  );
}
