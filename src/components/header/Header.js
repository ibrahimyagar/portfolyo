import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  aboutSection,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewAbout = aboutSection.display;
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const closeMobileMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn && menuBtn.checked) {
      menuBtn.checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo" onClick={closeMobileMenu}>
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
          aria-label="Menüyü aç/kapat"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewAbout && (
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                Hakkımda
              </a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills" onClick={closeMobileMenu}>
                Beceriler
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={closeMobileMenu}>
                İş Deneyimi
              </a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" onClick={closeMobileMenu}>
                Projeler
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={closeMobileMenu}>
                Açık Kaynak
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={closeMobileMenu}>
                Sertifikalar
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={closeMobileMenu}>
                Bloglar
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={closeMobileMenu}>
                Konuşmalar
              </a>
            </li>
          )}
          {viewResume && <li></li>}
          <li>
            <a href="#contact" onClick={closeMobileMenu}>
              İletişim
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
