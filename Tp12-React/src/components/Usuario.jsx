import React from "react";
import "./Usuario.css";

function Usuario({ nombre, puntaje }) {
  return (
    <div className="usuario-card">
      <h3>{nombre}</h3>
      <p><strong>Puntaje:</strong> {puntaje}</p>
    </div>
  );
}

export default Usuario;
