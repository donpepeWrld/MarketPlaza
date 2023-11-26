import Logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";
const Inicio = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center bd-placeholder-img">
                <img className="d-block mx-auto mb-4" src={Logo} alt="" width="72" height="57" />
                <h1 className="display-5 fw-bold text-body-emphasis">MarketPlaza</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Esta plataforma es perfecta para que encuentres tus productos favoritos a unos precios encantadores.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link className="btn btn btn-primary btn-lg px-4 gap-3" to="/Productos">Vamor A Mercar!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inicio;