import { useParams, Link } from "react-router-dom";


function DetallesReceta({ recetasList }) {
  // const {idReceta} = useParams();
 
  const contenidoDeUseParams = useParams();
  const idDeLaReceta = contenidoDeUseParams.idReceta
  

  const foundReceta = recetasList.find((eachReceta) => eachReceta.id === idDeLaReceta);
  
  

 

  return (
    <div>
      <h2>Para saber la receta busca en Google:</h2>
      <h1> Receta de {foundReceta.name} </h1>
      <h2>🤪 🤣 </h2>

     
    </div>
  );
}

export default DetallesReceta;
