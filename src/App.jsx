import "./App.css";
import Navegador from "../components/Navegador.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import RecetasList from "../components/RecetasList.jsx";
import DetallesReceta from "../components/DetallesReceta.jsx"
import NotFound from "../components/NotFound.jsx"
import AcerDe from "../components/AcerDe.jsx";
import {Routes, Route} from 'react-router-dom';
import { useState } from "react";

import recetas from "../components/recetas.json"

/*

2. /detalles :aqui se guarda la cadena. Usamos useParam() para recibir la cadena y almacenarla como idReceta. Este
idReceta la usaremos para encontrar el elemento que necesitamos

*/


function App() {
  const [listaRecetas, setListaRecetas] = useState(recetas);

  return (
    <>
    <Navegador/>
    <Sidebar />
 
    <Routes>
      <Route path={"/"} element={<Navegador/>} />  
      <Route path={"/detalles/:idReceta"} element={<DetallesReceta/>} /> 
      <Route path={"/acercade"} element={<AcerDe />} />
      <Route path={"*"} element= {<NotFound/>} />
      <Route path={"/detalles/recetaslist"} element= {<RecetasList listaRecetas={listaRecetas} setListaRecetas={setListaRecetas}/>} />

    </Routes> 
    
    
    <Footer />
      
    </>
  );
}

export default App;
