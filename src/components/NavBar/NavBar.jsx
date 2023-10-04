import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </div>
        <ul className={menuOpen ? styles.menuListOpen : styles.menuList}>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre Mí</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
