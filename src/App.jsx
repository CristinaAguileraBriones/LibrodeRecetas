import "./App.css";
import Navegador from "../components/Navegador.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import RecetasList from "../components/RecetasList.jsx";
import {Routes, Route} from 'react-router-dom';
import Lista from "../components/Lista.jsx";




function App() {
  return (
    <>

    <Routes>
      {/*<Route path={"/"} element={<Navegador />} />*/}
      
    </Routes> 
      <Navegador /> 
      <Lista />
      <Sidebar />
      <RecetasList/>
      <Footer />
      
    </>
  );
}

export default App;
