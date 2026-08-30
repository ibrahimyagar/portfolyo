import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Parse description to extract technologies and categories
  const parseDescription = description => {
    if (!description) return {mainText: "", technologies: []};

    // Split by periods to find technology sections
    const parts = description.split(/\.\s+/);
    const mainText = parts[0] || "";
    const techCategories = [];

    // Find technology categories (format: "Category: Tech1, Tech2, Tech3")
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i].trim();
      if (part.includes(":")) {
        const [category, techList] = part.split(":").map(s => s.trim());
        if (techList) {
          const technologies = techList
            .split(",")
            .map(t => t.trim())
            .filter(t => t);
          if (technologies.length > 0) {
            techCategories.push({
              category,
              technologies
            });
          }
        }
      }
    }

    return {mainText, techCategories};
  };

  const {mainText, techCategories} = parseDescription(cardInfo.description);

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        {mainText && (
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {mainText}
          </p>
        )}
        {techCategories.length > 0 && (
          <div className="certificate-technologies">
            {techCategories.map((category, catIndex) => (
              <div key={catIndex} className="tech-category">
                <div className="tech-category-name">{category.category}:</div>
                <div className="tech-list">
                  {category.technologies.join(", ")}
                </div>
              </div>
            ))}
          </div>
        )}
        {!techCategories.length && cardInfo.description && (
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {cardInfo.description}
          </p>
        )}
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
