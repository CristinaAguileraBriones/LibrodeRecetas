import "./App.css";
import Navegador from "../components/Navegador.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import RecetasList from "../components/RecetasList.jsx"

function App() {
  return (
    <>
      <Navegador />
      <Sidebar />
      <RecetasList/>
      <Footer />
    </>
  );
}

export default App;
