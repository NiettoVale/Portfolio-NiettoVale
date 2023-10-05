// Skills.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faNode,
  faHtml5,
  faNpm,
  faGithub,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import express from "./SVG Skills/icons8-express-js.svg";
import postgresql from "./SVG Skills/icons8-postgresql.svg";
import sequelize from "./SVG Skills/sequelizejs-icon.svg";
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t] = useTranslation("global");

  const skillsData = [
    { name: "JavaScript", icon: faJs, level: t("skills.level") },
    { name: "Node.js", icon: faNode, level: t("skills.level") },
    { name: "NPM", icon: faNpm, level: t("skills.level") },
    { name: "HTML", icon: faHtml5, level: t("skills.level") },
    { name: "Git", icon: faGitAlt, level: t("skills.level") },
    { name: "GitHub", icon: faGithub, level: t("skills.level") },
    { name: "Express", icon: express, level: t("skills.level") },
    { name: "Sequelize", icon: sequelize, level: t("skills.level") },
    { name: "PostgreSQL", icon: postgresql, level: t("skills.level") },
  ];

  const chunkedSkills = chunkArray(skillsData, 3);

  function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  return (
    <div id="skills">
      <div className={styles.skillsContainer} style={{ paddingTop: "55px" }}>
        <h1>{t("skills.title")}</h1>
        <div className={styles.skillList}>
          {chunkedSkills.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.skillRow}>
              {row.map((skill, index) => (
                <div
                  key={index}
                  className={`${styles.skill} ${
                    isLastThree(skill.name) ? styles.lastThreeSkills : ""
                  }`}
                >
                  {isLastThree(skill.name) ? (
                    <>
                      <img src={skill.icon} alt={skill.name} />
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={skill.icon}
                        size="4x" // Ajusta el tamaño de los iconos aquí
                      />
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function isLastThree(name) {
  const lastThreeSkills = ["Express", "Sequelize", "PostgreSQL"];
  return lastThreeSkills.includes(name);
}

export default Skills;
