import React from "react";
//import recetas from "../components/recetas.json";
//!Verificar si se necesito el Json en este componento o quitarlo
import ItemCard from "../components/ItemCard.jsx";
import Formulario from "../components/Formulario.jsx";


function RecetasList({recetasList, setRecetasList}) {

  //const [listaRecetas, setListaRecetas] = useState(recetas);
//!estamos mandando la const a app.jsx, por el momento no borramos
  function handleDelete(id) {
    const arrayFiltrado = recetasList.filter((element) => element.id !== id);
    setRecetasList(arrayFiltrado);
  }

  return (
    <div className="contenedor-lista">
      <h2>Añade nueva receta</h2>
      <Formulario recetasList={recetasList} setRecetasList={setRecetasList}/>
      {recetasList.map((cadaReceta, index) => (
          <ItemCard key={index} cadaReceta={cadaReceta} handleDelete={handleDelete} />
      ))}
      
    </div>
  );
}

export default RecetasList;



