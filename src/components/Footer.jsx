import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </Link>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Inicio</Link></li>
      <li className="nav-item"><Link to="/contacto" className="nav-link px-2 text-body-secondary">Agregar Producto</Link></li>
      <li className="nav-item"><Link to="/IniciarSesion" className="nav-link px-2 text-body-secondary">Iniciar Sesion</Link></li>
    </ul>
  </footer>
        </>
    )
}
export default Footer;