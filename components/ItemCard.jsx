import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ cadaReceta, handleDelete }) {
  return (
    <div>
      <li key={cadaReceta.id} className="card-comida">
        {" "}
        {/* Usar cadaReceta.id como key */}
        <Link to={`/detalles/${cadaReceta.id}`}>
          <h1>{cadaReceta.name}</h1>
          <img
            src={cadaReceta.image}
            alt="imagen comida"
            style={{ width: "200px" }}
          />
          <h4>Calories: {cadaReceta.calories}</h4>
          <h5>Servings: {cadaReceta.servings}</h5>

          {cadaReceta.calories >= 200 ? (
            <p style={{ color: "red" }}>⚠️ High in calories</p>
          ) : (
            <p style={{ color: "green" }}>✅ Low in calories</p>
          )}
        </Link>
        <button
          onClick={() => handleDelete(cadaReceta.id)}
          style={{ backgroundColor: "red" }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default ItemCard;
