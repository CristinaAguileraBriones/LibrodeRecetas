import React from "react";
import recetas from "../components/recetas.json";
import { useState } from "react";
import ItemCard from "../components/ItemCard.jsx";

function RecetasList() {
  const [listaRecetas, setListaRecetas] = useState(recetas);

  function handleDelete(id) {
    const arrayFiltrado = listaRecetas.filter((element) => element.id !== id);
    setListaRecetas(arrayFiltrado);
  }

  return (
    <ul className="contenedor-lista">
      {listaRecetas.map((cadaReceta, index) => (
        <li>          
          <ItemCard cadaReceta={cadaReceta} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default RecetasList;
