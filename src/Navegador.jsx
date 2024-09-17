import React from "react";
import imgLogo from "./assets/AbuelitaLogo.png";

function Navegador() {
  return (
    <div id="navegador">
      <nav>
      <img id="logo" src={imgLogo} alt="logo" />
        <h1>Libro de la Abuela</h1>
        
      </nav>
    </div>
  );
}

export default Navegador;
