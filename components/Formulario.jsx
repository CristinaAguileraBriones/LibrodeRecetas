import React from "react";
import { useState } from "react";

function Formulario({recetasList, setRecetasList }) {
  const [name, setNombreReceta] = useState("");
  const [image, setImagenReceta]= useState("");
  const [calories, setCaloriasReceta] = useState(0);
  const [servings, setServingsReceta]= useState(0);
{/*console.log(recetasList)*/}
  const handleNombreInput=(event)=>setNombreReceta(event.target.value)
  const handleImagenInput=(event)=>setImagenReceta(event.target.value)
  const handleCaloriaInput=(event)=>setCaloriasReceta(event.target.value)
  const handleServingsInput=(event)=>setServingsReceta(event.target.value)


  const handleAddRecipe = (event) => {
    event.preventDefault();

    const newRecipe={name, image, calories, servings}
    {/*console.log(newRecipe)*/}
    setRecetasList([...recetasList, newRecipe]);

    setNombreReceta("")
    setImagenReceta("")
    setCaloriasReceta(0)
    setServingsReceta(0)  

  };


  return (
    <div className="formulario">
      <form onSubmit={handleAddRecipe}>
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
        

        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}

export default Formulario;
