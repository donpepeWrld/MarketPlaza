import Baner from '../assets/Baner.png'
import kiwi from '../image/kiwi.jpg'
import Manzanita from '../image/Manzana.jpg'
import Dur from '../image/Durazno.jpg'
import Lul from '../image/Lulo.jpg'
import Pera from '../image/Pera.jpg'
import Piña from '../image/Piña.jpg'
const Productos = () => { 
    return(
        <>
        <div>
          <button type="button" class="w-10 btn btn-lg btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg> Bolsa</button>
        </div>
        <section className="py-5 text-center container bg bg-image: url('../assets/Baner.png'); background-size: cover; background-position: center;">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">En MarketPlaza te garantizamos productos de alta calidad</h1>
        <p className="lead text-body-secondary">Estamos encargados de traer el mejor producto directamente desde nuestro hermoso campo colombiano y llevarlo hasta donde tu quieras que lo llevemos!</p>
      </div>
    </div>
  </section>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Kiwi</h4>
          </div>
          <div class="card-body">
            <img src={kiwi} alt="" width={"100%"} height={225}/>     
            <button type="button" class="w-100 btn btn-lg btn-outline-primary mt-3">Agregar a la bolsa</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Manzana</h4>
          </div>
          <div class="card-body">
            <img src={Manzanita} alt="" width={"100%"} height={225}/> 
            <button type="button" class="w-100 btn btn-lg btn-outline-primary mt-3">Agregar a la bolsa</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Durazno</h4>
          </div>
          <div class="card-body">
            <img src={Dur} alt="" width={"100%"} height={225}/> 
            <button type="button" class="w-100 btn btn-lg btn-outline-primary mt-3">Agregar a la bolsa</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Lulo</h4>
          </div>
          <div class="card-body">
            <img src={Lul} alt="" width={"100%"} height={225}/>     
            <button type="button" class="w-100 btn btn-lg btn-outline-primary mt-3">Agregar a la bolsa</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pera</h4>
          </div>
          <div class="card-body">
            <img src={Pera} alt="" width={"100%"} height={225}/> 
            <button type="button" class="w-100 btn btn-lg btn-outline-primary mt-3">Agregar a la bolsa</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Piña</h4>
          </div>
          <div class="card-body">
            <img src={Piña} alt="" width={"100%"} height={225}/> 
            <button type="button" class="w-100 btn btn-lg btn-outline-primary mt-3">Agregar a la bolsa</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
 }
 export default Productos;