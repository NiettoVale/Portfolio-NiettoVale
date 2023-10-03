import About from "../About/About";
import ContactForm from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./Home.module.css"; // Asegúrate de tener el archivo CSS correspondiente

const Home = () => {
  return (
    <div className={styles.homeContainer} id="inicio">
      <div className={styles.introText}>
        <p>Hola, me llamo</p>
        <h1 className={styles.name}>VALENTIN FRANCISCO</h1>
        <p>y soy desarrollador backend</p>
      </div>

      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
};

export default Home;
