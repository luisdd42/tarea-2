import React from 'react';

function Buscador({ busqueda, manejarCambio }) {
  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={busqueda}
        onChange={manejarCambio}
      />
    </div>
  );
}

export default Buscador;
