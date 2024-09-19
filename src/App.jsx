import "./App.css";
import Navegador from "../components/Navegador.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import RecetasList from "../components/RecetasList.jsx";
import DetallesReceta from "../components/DetallesReceta.jsx"
import {Routes, Route} from 'react-router-dom';


/*
1. Crear un componente  => infoReceta
  Que debe mostrar los detalles de la receta elegida por el usuario

2. /detalles :aquiseguardalacadena. Usamos useParam() para recibir la cadena y almacenarla como idReceta. Este
idReceta la usaremos para encontrar el elemento que necesitamos

*/


function App() {
  return (
    <>
    <Navegador/>
    <Sidebar />
 
    <Routes>
      <Route path={"/"} element={<RecetasList/>} />  
      <Route path="/detalles/:idReceta" element={<DetallesReceta/>} />  
    </Routes> 
    
    
    <Footer />
      
    </>
  );
}

export default App;
