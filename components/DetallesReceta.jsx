import { useParams } from 'react-router-dom';
import recetas from "../components/recetas.json";

//1 Importamos el Json 


function DetallesReceta () {
  const idReceta = useParams()
  console.log("Información después de /detalles/", idReceta)

  //2 Con la información del Id de la receta, podemos solicitar la receta que queremos mostrar.
  // Filter: dame el elemento cuyo id coincide con idReceta (que nos llegó desde el URL)

  return (
    <div>
      Información de la receta elegida por el usuario

      Problema pendiente: 
      ¿Cómo saber qué receta queremos? 

    </div>

  )

}

export default DetallesReceta;