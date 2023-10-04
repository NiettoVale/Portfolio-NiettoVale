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

const Skills = () => {
  const skillsData = [
    { name: "JavaScript", icon: faJs, level: "Principiante" },
    { name: "Node.js", icon: faNode, level: "Principiante" },
    { name: "NPM", icon: faNpm, level: "Principiante" },
    { name: "HTML", icon: faHtml5, level: "Principiante" },
    { name: "Git", icon: faGitAlt, level: "Principiante" },
    { name: "GitHub", icon: faGithub, level: "Principiante" },
    { name: "Express", icon: express, level: "Principiante" },
    { name: "Sequelize", icon: sequelize, level: "Principiante" },
    { name: "PostgreSQL", icon: postgresql, level: "Principiante" },
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
    <div className={styles.skillsContainer} id="skills">
      <h1>SKILLS</h1>
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
  );
};

function isLastThree(name) {
  const lastThreeSkills = ["Express", "Sequelize", "PostgreSQL"];
  return lastThreeSkills.includes(name);
}

export default Skills;
