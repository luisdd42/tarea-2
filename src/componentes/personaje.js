import React from 'react';

function Personaje({ personaje }) {
  return (
    <div className="personaje">
      <h2>{personaje.name}</h2>
      {personaje.image ? (
        <img src={personaje.image} alt={personaje.name} />
      ) : (
        <p>No hay imagen disponible</p>
      )}
    </div>
  );
}

export default Personaje;
