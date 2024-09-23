import { useParams, Link } from "react-router-dom";


function DetallesReceta({ recetasList }) {
  // const {idReceta} = useParams();
 
  const contenidoDeUseParams = useParams();
  const idDeLaReceta = contenidoDeUseParams.idReceta
  

  const foundReceta = recetasList.find((eachReceta) => eachReceta.id === idDeLaReceta);

 

  return (
    <div>
      <h2>(Googlea la dereceta bello){foundReceta.name} </h2>

     
    </div>
  );
}

export default DetallesReceta;
