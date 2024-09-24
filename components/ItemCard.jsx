import React from "react";
import { Link, useNavigate } from "react-router-dom";


function ItemCard({ cadaReceta, handleDelete }) {
 const navigate= useNavigate()
  const handleEditar= () =>{
    navigate(`/actualizar/${cadaReceta.id}`)
  }
  return (
    <div>
      <li key={cadaReceta.id} className="card-comida">
        {" "}
        {/* Usar cadaReceta.id como key */}
        <Link to={`/detalles/${cadaReceta.id}`}>
          <h1 style={{color:"#E35A5A"}}>{cadaReceta.name}</h1>
          <img
            src={cadaReceta.image}
            alt="imagen comida"
            style={{ width: "200px" }}
          />
          <h4 style={{color:"#E35A5A"}}>Calories: {cadaReceta.calories}</h4>
          <h5 style={{color:"#E35A5A"}}>Servings: {cadaReceta.servings}</h5>

          {cadaReceta.calories >= 200 ? (
            <p style={{ color: "red" }}>⚠️ High in calories</p>
          ) : (
            <p style={{ color: "green" }}>✅ Low in calories</p>
          )}
        </Link>
        <button
          onClick={() => handleDelete(cadaReceta.id)}
          style={{ backgroundColor: "#E35A5A" }}
        >
          Delete
        </button>
        <button onClick={()=> handleEditar()}>Editar</button>
      </li>
    </div>
  );
}

export default ItemCard;
