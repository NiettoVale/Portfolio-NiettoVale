// ContactForm.jsx
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [t] = useTranslation("global");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`https://formspree.io/f/xayglbpz`, formData);
      // Utilizar SweetAlert2 para mostrar un mensaje de éxito
      Swal.fire({
        icon: "success",
        title: t("alerts.alert_ok_title"),
        text: t("alerts.alert_ok_text"),
      });
    } catch (error) {
      console.error("Error sending message:", error);
      // Utilizar SweetAlert2 para mostrar un mensaje de error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: t("alerts.alert_error_text"),
      });
    }
  };

  return (
    <div id="contact">
      <h1>{t("contact.title")}:</h1>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.label}>
              <label>{t("contact.name")}:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.label}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.label}>
              <label>{t("contact.message")}:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textareaField}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://acortar.link/BrUa2W"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
