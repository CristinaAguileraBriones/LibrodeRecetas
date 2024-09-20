import React from "react";
import { Link } from "react-router-dom";

function AcerDe() {
  return (
    <div>
      <h3> Info de los miembros:</h3>

      <a href="https://github.com/SLAE021">Samuel Angulo: </a>
      <p>Aqui falta nuestras descripciones. </p>
      <br />
      <a href="https://github.com/Gemma-Fernandez">Gemma Fernandez</a>
      <br />
      <a href="https://github.com/CristinaAguileraBriones">Cristina Aguilera</a>
      <br />
      <br/>

      <Link to="/">Volver al menu</Link>
    </div>
  );
}

export default AcerDe;
