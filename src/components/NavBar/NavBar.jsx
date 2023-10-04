import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

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
            <Link to="inicio" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link to="proyectos" smooth={true} duration={500}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
