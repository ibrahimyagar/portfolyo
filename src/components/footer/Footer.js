import React, {useContext} from "react";
import "./Footer.scss";
import ScrollReveal from "../scrollReveal/ScrollReveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <ScrollReveal bottom duration={1000} distance="5px">
      <footer className={`footer-main ${isDark ? "dark-mode" : ""}`}>
        {/* Alt Bölüm - Beyaz */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            {/* Üst - Navigasyon Linkleri */}
            <div className="footer-nav">
              <a href="#greeting">Anasayfa</a>
              <a href="#about">Hakkımda</a>
              <a href="#skills">Beceriler</a>
              <a href="#projects">Projeler</a>
              <a href="#contact">İletişim</a>
            </div>

            {/* Alt - Copyright */}
            <div className="footer-bottom-row">
              <div className="footer-copyright">
                <p>
                  © {new Date().getFullYear()} İbrahim Yağar. Tüm Hakları
                  Saklıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
