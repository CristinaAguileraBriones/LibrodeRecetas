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
    <div className="contenedor-lista">
      {listaRecetas.map((cadaReceta, index) => (
          <ItemCard key={index} cadaReceta={cadaReceta} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default RecetasList;
