import React, { useState } from "react";  // ✅ Importa React y useState
import { Link } from "react-router-dom";
import "./contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="contacto-container">
      <h2 className="contacto-titulo">Contáctanos</h2>
      <p className="contacto-subtitulo">
        ¿Tienes alguna consulta o sugerencia? Envíanos un mensaje.
      </p>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Teléfono</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          pattern="[0-9+ ]{6,15}"
          placeholder="+51 999 999 999"
          required
        />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contacto-btn">Enviar</button>
      </form>
    </div>
  );
}
