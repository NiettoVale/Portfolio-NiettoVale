// ContactForm.jsx
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Contact.module.css";

const ContactForm = () => {
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
        title: "Éxito!",
        text: "Mensaje enviado con éxito!!",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      // Utilizar SweetAlert2 para mostrar un mensaje de error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar el correo, intente de nuevo.",
      });
    }
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.formContainer}>
        <h1>Contáctame:</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.label}>
            <label>Nombre:</label>
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
            <label>Mensaje:</label>
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
  );
};

export default ContactForm;
