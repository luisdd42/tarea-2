import React, { useState, useEffect } from "react";
import "./App.css";
import Buscador from "./Buscador";
import Personaje from "./Personaje";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [personajes, setPersonajes] = useState(null);

  // Efecto para hacer la petición a la API cuando cambia la búsqueda
  useEffect(() => {
    if (busqueda) {
      fetch(
        `https://api.potterdb.com/v1/characters?filter[name_cont]=${busqueda}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Verifica los datos recibidos de la API
          if (data && data.data && Array.isArray(data.data)) {
            setPersonajes(data.data); // Guardamos los personajes
          } else {
            setPersonajes([]); // Si no hay personajes, mostramos un array vacío
          }
        })
        .catch(() => setPersonajes([])); // Si ocurre un error, mostramos un array vacío
    } else {
      setPersonajes(null); // Si no hay búsqueda, no mostramos personajes
    }
  }, [busqueda]);

  // Maneja el cambio en el input
  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="App">
      <h1>Buscador de Personajes de Harry Potter</h1>
      <Buscador busqueda={busqueda} manejarCambio={manejarCambio} />
      <div className="personajes">
        {personajes ? (
          personajes.length > 0 ? (
            personajes.map((personaje) => (
              <Personaje key={personaje.id} personaje={personaje} />
            ))
          ) : (
            <p>No se encontraron personajes.</p>
          )
        ) : (
          <p>Escribe un nombre para buscar un personaje.</p>
        )}
      </div>
    </div>
  );
}

export default App;
