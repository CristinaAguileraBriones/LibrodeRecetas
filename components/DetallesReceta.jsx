import { useParams } from 'react-router-dom';
import recetas from "../components/recetas.json";




function DetallesReceta () {
  const id = useParams()
  console.log("Información después de /detalles/", id)

  const foundReceta= recetas.find((eachReceta) => eachReceta.id === id) 

  
  //2 Con la información del Id de la receta, podemos solicitar la receta que queremos mostrar.
  // Filter: dame el elemento cuyo id coincide con idReceta (que nos llegó desde el URL)

  return (
    <div>
      <h2>Descripcion de la receta: </h2>
      
      
        return (
          <p key={eachReceta.id}> 
            <Link to={`/detalles/${foundReceta.id}`}>{foundReceta.name}
            </Link>
          </p>
        )
     

    </div>

  )

}

export default DetallesReceta;