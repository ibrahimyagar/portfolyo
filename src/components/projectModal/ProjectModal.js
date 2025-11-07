import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./ProjectModal.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectModal({ project, isOpen, onClose }) {
  const { isDark } = useContext(StyleContext);
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (enlargedImage) {
          setEnlargedImage(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, enlargedImage]);

  if (!isOpen || !project) return null;

  const modalContent = (
    <div className={`modal-overlay ${isOpen ? "modal-open" : ""}`} onClick={onClose}>
      <div
        className={`modal-content ${isDark ? "dark-mode" : ""}`}
        onClick={(e) => e.stopPropagation()}
        key={project.projectName}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <h2 className={`modal-title ${project.projectName === "EduHub" ? "eduhub-title" : ""} ${isDark ? "dark-mode" : ""}`}>
            {project.projectName}
          </h2>

          <div className={isDark ? "dark-mode modal-desc" : "modal-desc"}>
            {(() => {
              const desc = project.detailedDesc || project.projectDesc;
              const lines = desc.split("\n");
              const elements = [];
              let currentParagraph = [];

              const flushParagraph = () => {
                if (currentParagraph.length > 0) {
                  const paragraphText = currentParagraph.join(" ").trim();
                  if (paragraphText) {
                    elements.push(<p key={`para-${elements.length}`}>{paragraphText}</p>);
                  }
                  currentParagraph = [];
                }
              };

              for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                
                if (line === "") {
                  if (currentParagraph.length > 0) {
                    flushParagraph();
                  }
                  continue;
                }

                // Check if this is a main heading (ends with ":" and is a section title)
                // A main heading is a line that ends with ":" and has no content after the colon
                // OR is a known section heading
                const isMainHeading = line.endsWith(":") && 
                  (line === "Temel Özellikler:" || 
                   line === "İleri Seviye Özellikler:" ||
                   line === "Özellikler:" ||
                   line === "Kullanılan Teknolojiler:" ||
                   (line.split(":").length === 2 && line.split(":")[1].trim() === ""));
                
                if (isMainHeading) {
                  flushParagraph();
                  elements.push(
                    <h3 key={`heading-${elements.length}`} className={`section-heading ${isDark ? "dark-mode" : ""}`}>
                      {line}
                    </h3>
                  );
                } else if (line.includes(":")) {
                  // Feature item with colon
                  flushParagraph();
                  const colonIndex = line.indexOf(":");
                  const label = line.substring(0, colonIndex).trim();
                  const description = line.substring(colonIndex + 1).trim();
                  elements.push(
                    <p key={`feature-${elements.length}`}>
                      <strong className="feature-label">{label}:</strong> {description}
                    </p>
                  );
                } else {
                  // Check if we're under a heading that ends with ":"
                  // Find the last heading before this line
                  let foundHeading = false;
                  for (let j = i - 1; j >= 0; j--) {
                    const checkLine = lines[j].trim();
                    if (checkLine === "") continue;
                    if (checkLine.endsWith(":") && 
                        (checkLine === "Sınıf Yönetimi:" || 
                         checkLine === "Ödev Yönetimi:" ||
                         checkLine === "Duyuru Sistemi:" ||
                         checkLine === "Kullanıcı Yönetimi:" ||
                         checkLine === "Kullanılan Teknolojiler:" ||
                         (checkLine.split(":").length === 2 && checkLine.split(":")[1].trim() === ""))) {
                      foundHeading = true;
                      break;
                    }
                    // If we hit another heading or section, stop
                    if (checkLine.endsWith(":") || checkLine.includes(":")) break;
                  }
                  
                  if (foundHeading) {
                    // Render each line as a separate paragraph for better readability
                    flushParagraph();
                    elements.push(
                      <p key={`item-${elements.length}`} style={{ margin: "0.25rem 0", paddingLeft: "0" }}>
                        {line}
                      </p>
                    );
                  } else {
                    // Regular content line - add to current paragraph
                    currentParagraph.push(line);
                  }
                }
              }

              flushParagraph();
              return elements;
            })()}
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="modal-technologies">
              <h3 className={isDark ? "dark-mode" : ""}>Kullanılan Teknolojiler:</h3>
              <div className="tech-badges">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`tech-badge ${isDark ? "dark-mode" : ""}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="modal-screenshots">
              <h3 className={isDark ? "dark-mode" : ""}>Proje Görselleri:</h3>
              <div className="screenshots-gallery">
                {project.screenshots.map((screenshot, index) => {
                  const screenshotImage = typeof screenshot === 'object' && screenshot.image ? screenshot.image : screenshot;
                  const screenshotName = typeof screenshot === 'object' && screenshot.name ? screenshot.name : `Görsel ${index + 1}`;
                  return (
                    <div key={index} className="screenshot-item">
                      <div className="screenshot-name">{screenshotName}</div>
                      <img 
                        src={screenshotImage} 
                        alt={`${project.projectName} - ${screenshotName}`}
                        onClick={() => setEnlargedImage(screenshotImage)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {project.footerLink && project.footerLink.length > 0 && (
            <div className="modal-links">
              {project.footerLink.map((link, index) => (
                <button
                  key={index}
                  className={`modal-link-btn ${isDark ? "dark-mode" : ""}`}
                  onClick={() => {
                    if (link.url) {
                      window.open(link.url, "_blank");
                    }
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const enlargedImageModal = enlargedImage && (
    <div 
      className="enlarged-image-overlay" 
      onClick={() => setEnlargedImage(null)}
    >
      <button 
        className="enlarged-image-close"
        onClick={() => setEnlargedImage(null)}
      >
        ×
      </button>
      <img 
        src={enlargedImage} 
        alt="Büyütülmüş görsel"
        onClick={(e) => e.stopPropagation()}
        className="enlarged-image"
      />
    </div>
  );

  return (
    <>
      {ReactDOM.createPortal(modalContent, document.body)}
      {ReactDOM.createPortal(enlargedImageModal, document.body)}
    </>
  );
}

