import React from "react";
import recetas from "../components/recetas.json";
import ItemCard from "../components/ItemCard.jsx";


function RecetasList(props) {

  //const [listaRecetas, setListaRecetas] = useState(recetas);
//!estamos mandando la const a app.jsx, por el momento no borramos
  function handleDelete(id) {
    const arrayFiltrado = listaRecetas.filter((element) => element.id !== id);
    setListaRecetas(arrayFiltrado);
  }

  return (
    
    <div>
        <h1>User id: {props.recetas.id}</h1>
        <h3>{props.recetas.name}</h3>
        <p>{props.recetas.location}</p>
      </div>

   

  );
}

export default RecetasList;



