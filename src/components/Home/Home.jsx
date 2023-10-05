import About from "../About/About";
import ContactForm from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global");
  return (
    <div id="inicio" style={{ paddingTop: "21px" }}>
      <div className={styles.homeContainer}>
        <div className={styles.introText}>
          {/* <p>Hola 👋 me llamo</p>
          <h1 className={styles.name}>VALENTIN FRANCISCO</h1>
          <p>y soy desarrollador backend</p> */}

          <p>{t("home.my_name")}</p>
          <h1 className={styles.name}>{t("home.name")}</h1>
          <p>{t("home.developer")}</p>
        </div>

        <About />
        <Projects />
        <Skills />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
