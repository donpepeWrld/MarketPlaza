import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Navbar from "./components/NavBar";
import Baner from "./assets/Baner.png"
import IniciarSesion from "./pages/IniciarSesion";
import Productos from "./pages/Productos";
import AgregarPoducto from "./pages/AgregarProducto";

const App = () => { 
  return(
    <>
    <header>
    <Navbar/>
    </header>
    <Routes>
    <Route element={<Inicio/>} path="/"></Route>
      <Route element={<IniciarSesion/>} path="/IniciarSesion"></Route>
      <Route element={<Productos/>} path="/Productos"></Route>
      <Route element={<AgregarPoducto/>} path="/AgregarProducto"></Route>

      

    </Routes>
  
    <footer>
      <Footer/>
    </footer>
    </>
  )
 }
 export default App;