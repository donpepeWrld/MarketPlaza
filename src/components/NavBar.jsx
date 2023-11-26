import {Link} from "react-router-dom";  
const Navbar = () => { 
    return(
        <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <Link className="btn btn-outline-danger" to="/">Inicio</Link>
                <Link className="btn btn-outline-warning" to="/Productos">Comprar</Link>
                <Link className="btn btn-outline-warning" to="/agregarProducto">Agrega un producto</Link>
                <Link className="btn btn-outline-success" to="/iniciarsesion">Iniciar sesion</Link>
            </div>
            </nav>
            
        </>
    )
 }
 export default Navbar;