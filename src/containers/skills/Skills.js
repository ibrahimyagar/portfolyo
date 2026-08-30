import React, {useContext} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <ScrollReveal bottom duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <div className="categorized-skills-container">
              {skillsSection.categorizedSkills.map((category, catIndex) => (
                <ScrollReveal
                  key={`category-${catIndex}`}
                  left
                  delay={catIndex * 200}
                  duration={800}
                >
                  <div
                    className="skill-category-card"
                    style={{gridArea: category.gridArea}}
                  >
                    <h2 className="category-title">{category.categoryName}</h2>
                    <div className="skill-icons-grid">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-icon-item">
                          <i className={skill.fontAwesomeClassname}></i>
                          <p className="skill-name">{skill.skillName}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
