import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languageOptions = [
    { code: "en", label: "INGLÉS" },
    { code: "es", label: "ESPAÑOL" },
    { code: "pt", label: "PORTUGUÉS" },
    { code: "ru", label: "RUSO" },
    // Agrega más idiomas según sea necesario
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.menuToggleContainer}>
          <div className={styles.menuToggle} onClick={toggleMenu}>
            ☰
          </div>
          <div className={styles.menuText} onClick={toggleMenu}>
            Menu
          </div>
        </div>
        <ul className={`${styles.menuList} ${menuOpen ? styles.active : ""}`}>
          <Link to="#" onClick={toggleMenu} className={styles.translateTitle}>
            {t("common.translate")}
          </Link>
          {menuOpen && (
            <li className={styles.translate}>
              <ul className={styles.languageOptions}>
                {languageOptions.map((option) => (
                  <li key={option.code}>
                    <Link
                      to="#"
                      onClick={() => {
                        changeLanguage(option.code);
                        toggleMenu();
                      }}
                    >
                      {option.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
          <li>
            <Link to="inicio" smooth={true} duration={500}>
              {t("navbar.home")}
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              {t("navbar.about")}
            </Link>
          </li>
          <li>
            <Link to="proyectos" smooth={true} duration={500}>
              {t("navbar.projects")}
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              {t("navbar.skills")}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              {t("navbar.contact")}
            </Link>
          </li>

          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=1WF89S9jpNvW0UtHjseIIDY-UXRICfpFQ"
              rel="noopener noreferrer"
            >
              {t("navbar.cv")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
