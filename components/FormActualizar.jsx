import React from 'react'
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FormActualizar({recetasList, setRecetasList}) {
    const navigate= useNavigate()

    const{idReceta}= useParams();
    const recetaActual= recetasList.find(eachReceta =>eachReceta.id === idReceta)

    const [name, setNombreReceta] = useState(recetaActual.name);
    const [image, setImagenReceta]= useState(recetaActual.image);
    const [calories, setCaloriasReceta] = useState(recetaActual.calories);
    const [servings, setServingsReceta]= useState(recetaActual.servings);
  {/*console.log(recetasList)*/}
    const handleNombreInput=(event)=>setNombreReceta(event.target.value)
    const handleImagenInput=(event)=>setImagenReceta(event.target.value)
    const handleCaloriaInput=(event)=>setCaloriasReceta(event.target.value)
    const handleServingsInput=(event)=>setServingsReceta(event.target.value)

    
    const handleEditRecipe = (event) => {     
    event.preventDefault();
    const recetaActualizada= {name, image, calories, servings};
    console.log("Receta actualizada", recetaActualizada)
    //Paso 1: 
      //Encontrar el elememento del array recetasList que queremos actualizar 
      //Actualizar el objeto 
        const recetasListActualizada= [...recetasList];

        const arrayFiltrado = recetasListActualizada.map( element => {
          return element.id === idReceta? recetaActualizada : element 
        })
               
        setRecetasList(arrayFiltrado);

        navigate("/")
    
        //Paso 2: usar useNavigate para ir a la página de detalles del elemento modificado
    
        
    }   
    
     

  return (
    <div>
        <form onSubmit={handleEditRecipe}>
        <div>
          <label>Receta: </label>
          <input
            onChange={handleNombreInput}
            value={name}
            type="text"
            name="name"
            placeholder="Nombre receta"
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            onChange={handleImagenInput}
            value={image}
            type="url"
            name="image"
            placeholder="Url"
          />
        </div>
        <div>
          <label>Calorias: </label>
          <input
            onChange={handleCaloriaInput}
            value={calories}
            type="number"
            name="calorias"
            placeholder="numero de calorias"
          />
        </div>
        
        <div>
          <label>Servings:</label>
          <input
            onChange={handleServingsInput}
            value={servings}
            type="number"
            name="Servings"
            placeholder="Numero de servings"
          />
        </div>
        <button type="submit">Editar</button>
      
        </form>
    </div>
  )
}

export default FormActualizar