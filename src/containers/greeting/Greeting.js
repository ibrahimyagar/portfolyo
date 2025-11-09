import React, {useContext, useEffect, useMemo, useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import coderAnimation from "../../assets/lottie/coder";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const roles = useMemo(
    () => ["Java & Spring Boot", ".NET Core", "React"],
    []
  );
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 110;
    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
      }, 350);
      return () => clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      setDisplayedText(prevText => {
        if (isDeleting) {
          return currentWord.slice(0, Math.max(prevText.length - 1, 0));
        }
        return currentWord.slice(0, prevText.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  if (!greeting.displayGreeting) {
    return null;
  }

  const rawTitle = greeting.title || "";
  const prefix = "Merhaba ben";
  const name = rawTitle.toLowerCase().startsWith(prefix.toLowerCase())
    ? rawTitle.slice(prefix.length).trim()
    : rawTitle;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-text-wrapper">
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {prefix}
                <br />
                {name}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className={isDark ? "typewriter-row dark" : "typewriter-row"}>
                Full-stack geliştirici olarak
                <span className="typewriter-dynamic">
                  {` ${displayedText}`}
                  <span className="typewriter-cursor">_</span>
                </span>
              </p>
              <p className={isDark ? "typewriter-trailing dark" : "typewriter-trailing"}>
                ile ölçeklenebilir çözümler geliştiriyorum.
              </p>
              <p className={isDark ? "greeting-status dark" : "greeting-status"}>
                Yeni fırsatları değerlendirmeye açığım.
              </p>
            </div>
            <div className="social-and-button">
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text={
                    <span className="cta-content">
                      <span className="cta-arrow">→</span>
                      İletişime Geç
                    </span>
                  }
                  href="#contact"
                  className="greeting-primary-button"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie
                animationData={coderAnimation}
                style={{width: "95%", height: "95%", marginLeft: "40px"}}
              />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
