import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  // Technology icon mapping
  const getTechIcon = techName => {
    const techMap = {
      "Spring Boot": "fab fa-java",
      "Spring Security": "fab fa-java",
      JWT: "fas fa-shield-alt",
      PostgreSQL: "fas fa-database",
      "JPA/Hibernate": "fas fa-layer-group",
      React: "fab fa-react",
      Axios: "fas fa-globe",
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
      MSSQL: "fas fa-database",
      "HTML/CSS": "fab fa-html5",
      HTML: "fab fa-html5",
      CSS: "fab fa-css3-alt",
      CSS3: "fab fa-css3-alt",
      HTML5: "fab fa-html5",
      Bootstrap: "fab fa-bootstrap",
      "Bootstrap 5": "fab fa-bootstrap",
      JavaScript: "fab fa-js",
      jQuery: "fab fa-js",
      "Node.js": "fab fa-node-js",
      "Jitsi Meet": "fas fa-video",
      StackBlitz: "fas fa-code",
      iyzico: "fas fa-credit-card"
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

  const GetDescBullets = ({descBullets, isDark}) => {
    if (!descBullets) return null;

    return descBullets.map((item, i) => {
      // Check if this is a technology list item
      if (item.includes("Teknolojiler:")) {
        const techList = item.replace("Teknolojiler:", "").trim();
        const technologies = techList.split(",").map(t => t.trim());

        return (
          <li
            key={i}
            className={`${
              isDark ? "subTitle dark-mode-text" : "subTitle"
            } tech-list-item`}
          >
            <span style={{fontWeight: "bold"}}>Teknolojiler:</span>
            <div className="tech-icons-container">
              {technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`tech-icon-item ${isDark ? "dark-mode" : ""}`}
                >
                  <i className={getTechIcon(tech)}></i>
                  <span className="tech-name">{tech}</span>
                </span>
              ))}
            </div>
          </li>
        );
      }

      // Regular bullet point
      return (
        <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
          {item}
        </li>
      );
    });
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
