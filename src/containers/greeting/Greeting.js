import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";
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
  const roles = useMemo(() => ["Spring Boot", ".NET Core", "React"], []);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typewriterRowRef = useRef(null);
  const typewriterLineRef = useRef(null);

  const fitTypewriterLine = useCallback(() => {
    const row = typewriterRowRef.current;
    const line = typewriterLineRef.current;
    if (!row || !line) {
      return;
    }

    const available = row.clientWidth;
    if (available <= 0) {
      return;
    }

    const longestRole = roles.reduce(
      (longest, role) => (role.length > longest.length ? role : longest),
      ""
    );

    const probe = line.cloneNode(true);
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.left = "-99999px";
    probe.style.top = "0";
    probe.style.whiteSpace = "nowrap";
    probe.style.fontSize = "16px";

    const probeDynamic = probe.querySelector(".typewriter-dynamic");
    if (probeDynamic) {
      probeDynamic.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = longestRole;
        }
      });
    }

    row.appendChild(probe);

    let low = 10;
    let high = 32;
    let best = low;

    while (low <= high) {
      const mid = (low + high) / 2;
      probe.style.fontSize = `${mid}px`;
      if (probe.scrollWidth <= available) {
        best = mid;
        low = mid + 0.25;
      } else {
        high = mid - 0.25;
      }
    }

    row.removeChild(probe);
    row.style.fontSize = `${Math.max(10, Math.floor(best * 100) / 100)}px`;
  }, [roles]);

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

  useLayoutEffect(() => {
    fitTypewriterLine();

    let cancelled = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) {
          fitTypewriterLine();
        }
      });
    }

    const row = typewriterRowRef.current;
    if (!row || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", fitTypewriterLine);
      return () => {
        cancelled = true;
        window.removeEventListener("resize", fitTypewriterLine);
      };
    }

    const observer = new ResizeObserver(() => {
      fitTypewriterLine();
    });
    observer.observe(row);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [fitTypewriterLine, isDark]);

  if (!greeting.displayGreeting) {
    return null;
  }

  const rawTitle = greeting.title || "";
  const prefix = "Merhaba ben";
  const name = rawTitle.toLowerCase().startsWith(prefix.toLowerCase())
    ? rawTitle.slice(prefix.length).trim()
    : rawTitle;

  return (
    <ScrollReveal bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-text-wrapper">
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {prefix}
                <br />
                {name}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                ref={typewriterRowRef}
                className={isDark ? "typewriter-row dark" : "typewriter-row"}
              >
                <span ref={typewriterLineRef} className="typewriter-line">
                  Full-stack geliştirici olarak{" "}
                  <span className="typewriter-dynamic">
                    {displayedText}
                    <span className="typewriter-cursor">_</span>
                  </span>
                </span>
              </p>
              <p
                className={
                  isDark ? "typewriter-trailing dark" : "typewriter-trailing"
                }
              >
                ile ölçeklenebilir çözümler geliştiriyorum.
              </p>
              <p
                className={isDark ? "greeting-status dark" : "greeting-status"}
              >
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
                style={{width: "100%", height: "auto"}}
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
    </ScrollReveal>
  );
}
