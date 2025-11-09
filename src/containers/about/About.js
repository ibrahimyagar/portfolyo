import React, {useContext, useEffect, useRef} from "react";
import "./About.scss";
import aboutPhoto from "../../assets/images/ibrahim.jpg";
import {aboutSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const {isDark} = useContext(StyleContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const handleEntries = entries => {
      entries.forEach(entry => {
        if (entry.target === section) {
          if (entry.isIntersecting) {
            section.classList.add("about-animate");
          } else {
            section.classList.remove("about-animate");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleEntries, {
      threshold: 0.35
    });

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!aboutSection.display) {
    return null;
  }

  return (
    <section
      className={`about-section ${isDark ? "dark-mode" : ""}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">{aboutSection.title}</h2>
          <div className="about-description">
            {aboutSection.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="about-visual">
          <div className="about-photo-frame">
            <img src={aboutPhoto} alt="İbrahim Yağar" className="about-photo" />
          </div>
        </div>
        {aboutSection.downloadGroups?.length ? (
          <div className="about-downloads">
            {aboutSection.downloadGroups.map(group => (
              <div className="download-group" key={group.locale}>
                <div className="download-group-header">
                  <span
                    className="download-flag"
                    role="img"
                    aria-label={group.label}
                  >
                    {group.flag}
                  </span>
                  <span className="download-language">{group.label}</span>
                </div>
                <div className="download-buttons">
                  {group.items.map(item => (
                    <a
                      key={item.text}
                      href={item.href}
                      className="download-pill"
                      download
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="pill-icon">
                        <i className="fas fa-download" aria-hidden="true"></i>
                      </span>
                      <span className="pill-text">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
