import React from "react";
import recetas from "../components/recetas.json";
import { useState } from "react";

function RecetasList() {
  const [listaRecetas, setListaRecetas] = useState(recetas);

  function handleDelete(id) {
    const arrayFiltrado = listaRecetas.filter( element => element.id !== id)
    setListaRecetas(arrayFiltrado);
  }
  

  return ( 
      <ul className="contenedor-lista">
        {listaRecetas.map((cadaReceta, index) => (
          <li key={cadaReceta.id} className="card-comida"> {/* Usar cadaReceta.id como key */}
            <h1>{cadaReceta.name}</h1>
            <img
              src={cadaReceta.image}
              alt="imagen comida"
              style={{ width: "200px" }}
            />
            <h4>Calories: {cadaReceta.calories}</h4>
            <h5>Servings: {cadaReceta.servings}</h5>
  
            {cadaReceta.calories >=  200 ? (
              <p style={{ color: "red" }}>⚠️ High in calories</p>
            ) : (
              <p style={{ color: "green" }}>✅ Low in calories</p>
            )}
            
            <button onClick={() => handleDelete(cadaReceta.id)} style={{ backgroundColor: "red" }}> 
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  }

export default RecetasList;
