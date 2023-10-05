import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <div id="about">
      <div className={styles.aboutContainer} style={{ paddingTop: "45px" }}>
        {/* <h1 className={styles.h1}>SOBRE MI</h1> */}
        <h1 className={styles.h1}>{t("about.about_me")}</h1>

        <div className={styles.imgContainer}>
          {/* <img
            src="https://acortar.link/JNcCTv"
            alt="imageProfile"
            className={styles.imgAbout}
          /> */}

          <img
            src="https://acortar.link/r7L50R"
            alt="imageProfile"
            className={styles.imgAbout}
          />

          <img
            src="https://acortar.link/s1DrL4"
            alt="security"
            className={styles.imgAboutSecurity}
          />
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <h3>{t("about.h1_who_I_am")}</h3>
            <p>{t("about.who_I_am")}</p>
          </div>

          <div className={styles.card}>
            {/* <h3>Mis estudios</h3>
            <p>
              Mi camino en el mundo de la tecnología comenzó con dos años de
              estudio en la carrera de Ingeniería en Sistemas de Información.
              Sin embargo, a medida que avanzaba, descubrí que mi verdadera
              pasión residía en la programación en sí. Fue entonces cuando
              decidí explorar nuevas oportunidades. Fue en ese momento que
              descubrí Soy Henry, un bootcamp de desarrollo web full stack.
              Decidí sumergirme por completo en esta emocionante travesía hacia
              el mundo del desarrollo web. Antes de embarcarme en esta aventura,
              adquirí conocimientos en el campo de la ciberseguridad. Realicé
              cursos como Introducción a la Ciberseguridad y Fundamentos de la
              Ciberseguridad, donde mi fascinación por este mundo creció de
              manera significativa. Estos cursos no solo me proporcionaron una
              base sólida en ciberseguridad, sino que también despertaron mi
              interés por explorar y contribuir a un entorno digital más seguro.
            </p> */}
            <h3>{t("about.h1_my_studies")}</h3>
            <p>{t("about.my_studies")}</p>
          </div>

          <div className={styles.card}>
            {/* <h3>¿A qué aspiro?</h3>
            <p>
              Mi aspiración es trascender los límites del desarrollo Back-end y
              adentrarme en el fascinante mundo de la ciberseguridad. Mi
              objetivo es convertirme en un destacado experto en diversas ramas
              de este campo en constante evolución. En particular, anhelo
              aprender áreas clave como la criptografía, la investigación
              forense digital y la seguridad de la red. Busco no solo enfrentar
              los desafíos actuales en ciberseguridad, sino también anticipar y
              prevenir las amenazas futuras. Mi visión es contribuir al
              fortalecimiento de la ciberseguridad en un mundo cada vez más
              digitalizado y colaborar en la construcción de un entorno en línea
              seguro y confiable para individuos y organizaciones por igual.
            </p> */}
            <h3>{t("about.h1_What_do_I_aspire_to")}</h3>
            <p>{t("about.What_do_I_aspire_to")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
