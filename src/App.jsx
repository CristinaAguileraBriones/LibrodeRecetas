import "./App.css";
import Navegador from "../components/Navegador.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import RecetasList from "../components/RecetasList.jsx";
import DetallesReceta from "../components/DetallesReceta.jsx"
import NotFound from "../components/NotFound.jsx"
import AcerDe from "../components/AcerDe.jsx";
import {Routes, Route} from 'react-router-dom';
//import recetas from "../components/recetas.json"

/*

2. /detalles :aqui se guarda la cadena. Usamos useParam() para recibir la cadena y almacenarla como idReceta. Este
idReceta la usaremos para encontrar el elemento que necesitamos

*/
//   const [listaRecetas, setListaRecetas] = useState(recetas);


function App() {
  return (
    <>
    <Navegador/>
    <Sidebar />
 
    <Routes>
      <Route path={"/"} element={<Navegador/>} />  
      <Route path={"/detalles/:idReceta"} element={<DetallesReceta/>} /> 
      <Route path={"/acercade"} element={<AcerDe />} />
      <Route path={"*"} element= {<NotFound/>} />

     

    </Routes> 
    
    
    <Footer />
      
    </>
  );
}

export default App;
