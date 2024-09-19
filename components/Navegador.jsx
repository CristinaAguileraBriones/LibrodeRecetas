import React from "react";
import imgLogo from "../src/assets/AbuelitaLogo.png";


function Navegador() {
  return (
      <nav id="navegador">
        <img id="logo" src={imgLogo} alt="logo" />
        <h1 id="tituloPag">Libro de la Abuela</h1>
      </nav>
  );
}

export default Navegador;
