// Contact.js
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../styles/contact.css"; // Importando o arquivo CSS para o contato

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ded9jbj",
        "template_kdw7gt1",
        {
          from_name: form.name,
          to_name: "Pedro",
          from_email: form.email,
          to_email: "pedrolucassantana@gmail.com",
          message: form.message,
        },
        "UQYBMe2j-tMFVyC9W"
      )
      .then(
        () => {
          setLoading(false);
          alert("Muito obrigado pelo contato! Retornarei em breve");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(`Ocorreu um erro ao enviar a mensagem. Detalhes: ${error.message}`);
        }
      );
  };

  return (
    <div className={`contact-container ${styles.contactContainer}`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`contact-form`}
      >
        <p className="section-sub-text">Fale Conosco</p>
        <h3 className="section-head-text">Contato</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form-wrapper"
        >
          <label className="form-label">
            <span className="form-label-text">Seu nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Como posso chama-lo?"
              className="form-input"
            />
          </label>

          <label className="form-label">
            <span className="form-label-text">Seu email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual seu email?"
              className="form-input"
            />
          </label>

          <label className="form-label">
            <span className="form-label-text">Sua mensagem</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="No que está pensando?"
              className="form-textarea"
            />
          </label>
          <button
            type="submit"
            className="form-submit-button"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
