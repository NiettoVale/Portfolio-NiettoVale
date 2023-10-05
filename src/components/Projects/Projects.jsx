import styles from "./Projects.module.css"; // Asegúrate de tener el archivo CSS correspondiente
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t] = useTranslation("global");

  return (
    <div id="proyectos">
      <div className={styles.ProjectsContainer} style={{ paddingTop: "50px" }}>
        <h1>{t("projects.title")}</h1>

        <div className={styles.ProjectsContainer}>
          <div className={styles.proyecto}>
            <a href="https://acortar.link/k6itrR" target="_blank">
              <img
                src="https://acortar.link/ecQYOw"
                alt="GameVerse"
                className={styles.imagenProyecto}
              />
            </a>

            <div className={styles.descripcion}>
              {/* <h2>GameVerse: Explora, crea y conquista</h2>
              <p>
                Este proyecto fue desarrollado durante mi etapa en el bootcamp
                de Soy Henry. GameVerse es una aplicación de una sola página
                (SPA) que te permite explorar una variedad de videojuegos, crear
                tus propios títulos y realizar acciones como edición y
                eliminación. Además, proporciona detalles exhaustivos sobre cada
                juego en particular, brindando una experiencia completa de
                juego.
              </p> */}

              <h2>GameVerse: Explora, crea y conquista</h2>
              <p>{t("projects.gameverse")}</p>

              {/* <a href="https://acortar.link/k6itrR" target="_blank">
                <p>Repositorio</p>
              </a> */}
            </div>
          </div>

          <div className={styles.proyecto}>
            <a href="https://acortar.link/9NZBCi" target="_blank">
              <img
                src="https://acortar.link/0Q9lmf"
                alt="Rick y Morty"
                className={styles.imagenProyecto}
              />
            </a>

            <div className={styles.descripcion}>
              <h2>Rick y Morty</h2>
              {/* <p>
                Durante mi participación en el bootcamp de Soy Henry, desarrollé
                esta aplicación web. Rick y Morty es una plataforma que hace uso
                de la API oficial de la serie para ofrecer información detallada
                sobre los personajes que aparecen en la misma. Los usuarios
                tienen la capacidad de buscar personajes, explorar sus detalles,
                aplicar filtros de búsqueda y guardar sus personajes favoritos
                para una experiencia personalizada.
              </p> */}
              <p>{t("projects.rick_morty")}</p>
            </div>
          </div>

          <div className={styles.proyecto}>
            <a href="https://acortar.link/sD8YSV" target="_blank">
              <img
                src="https://acortar.link/vBnXco"
                alt="Espacio Flipante"
                className={styles.imagenProyecto}
              />
            </a>

            <div className={styles.descripcion}>
              <h2>Espacio Flipante</h2>
              {/* <p>
                Espacio Flipante es una tienda de indumentaria que nació de la
                pasión y el esfuerzo de un equipo unido durante la etapa final
                de los laboratorios en Soy Henry. Aquí encontrarás una selección
                única de prendas que reflejan tu estilo personal, en un ambiente
                vibrante y creativo creado con dedicación y amor. Bienvenido a
                un espacio donde la moda y la colaboración se unen para
                ofrecerte una experiencia verdaderamente flipante.
              </p> */}
              <p>{t("projects.espacio_flipante")}</p>
            </div>
          </div>

          <div className={styles.proyecto}>
            <img
              src="https://acortar.link/woN4Gp"
              alt="construccion"
              className={styles.imagenProyecto}
            />
            <div className={styles.descripcion}>
              <h2>CipherStrength API</h2>
              {/* <p>
                CipherStrength API es una herramienta diseñada para que los
                desarrolladores evalúen la fortaleza de las contraseñas. Esta
                implementada utilizando JavaScript y Express, esta API utiliza
                la biblioteca zxcvbn para realizar análisis de seguridad en las
                contraseñas proporcionadas.
              </p> */}
              <p>{t("projects.cipher_strength")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
