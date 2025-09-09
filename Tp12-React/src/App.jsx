import React from "react";
import Usuario from "./components/Usuario";
import "./App.css";

function App() {
  const usuarios = [
    { "id": 1, "nombre": "José", "puntaje": 50 },
    { "id": 15, "nombre": "María", "puntaje": 20 },
    { "id": 14, "nombre": "Juan", "puntaje": 99 },
    { "id": 2, "nombre": "Lucía", "puntaje": 35 },
    { "id": 5, "nombre": "Carlos", "puntaje": 38 },
    { "id": 3, "nombre": "Ana", "puntaje": 42 },
    { "id": 7, "nombre": "Pedro", "puntaje": 67 },
    { "id": 12, "nombre": "Laura", "puntaje": 71 },
    { "id": 8, "nombre": "Andrés", "puntaje": 29 },
    { "id": 9, "nombre": "Camila", "puntaje": 46 },
    { "id": 10, "nombre": "Felipe", "puntaje": 83 },
    { "id": 11, "nombre": "Valentina", "puntaje": 77 },
    { "id": 4, "nombre": "Mateo", "puntaje": 64 },
    { "id": 12, "nombre": "Isabella", "puntaje": 59 },
    { "id": 13, "nombre": "Sofía", "puntaje": 80 },
    { "id": 16, "nombre": "Diego", "puntaje": 47 },
    { "id": 17, "nombre": "Manuela", "puntaje": 91 },
    { "id": 18, "nombre": "Daniel", "puntaje": 38 }
  ];

  return (
    <div className="app-container">
      <h1>Lista de Usuarios</h1>
      <div className="usuarios-lista">
        {usuarios.map((user) => (
          <Usuario
            key={user.id}
            nombre={user.nombre}
            puntaje={user.puntaje}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
