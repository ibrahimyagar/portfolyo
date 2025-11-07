import React, {useContext, useState, useEffect, useRef} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Her görünür olduğunda animasyonu yeniden tetikle
            setAnimationKey((prev) => prev + 1);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills" ref={sectionRef}>
      <div className="skills-main-div">
        <Fade key={`main-${animationKey}`} bottom duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <div className="categorized-skills-container">
              {skillsSection.categorizedSkills.map((category, catIndex) => (
                <Fade key={`category-${catIndex}-${animationKey}`} left delay={catIndex * 200} duration={800}>
                  <div className="skill-category-card" style={{gridArea: category.gridArea}}>
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
                </Fade>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
