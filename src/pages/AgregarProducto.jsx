const AgregarPoducto = () => { 
    return(
        <>
        <div className="row col-md-7 col-lg-5 text-center items-center mx-auto d-flex align-items-center">
        <h4 className="mb-3">Agrega un producto!</h4>
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
          <div className="col-12">
              <label for="email" className="form-label">Fruta</label>
              <input type="email" className="form-control" id="email" placeholder="pera..."/>
              <div className="invalid-feedback">
                porfi valida el nombre
              </div>
            </div>


            <div className="col-md-5">
              <label for="country" className="form-label">onde viene el producto ola</label>
              <select className="form-select" id="country" required="">
                <option value="">Elija sumercé</option>
                <option>Boyacá</option>
                <option>Santander</option>
                <option>La costa?</option>
                <option>Cundinamarca</option>
                <option>Vecino Pais</option>
              </select>
              <div className="invalid-feedback">
             porfa valida el sitio.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Precio</label>
              <input type="text" className="form-control" id="zip" placeholder="" required=""/>
              <div className="invalid-feedback">
                se necesita un precio.
              </div>
            </div>
          </div>

     

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" for="same-address">¿Tiene puesto o local en tunja?</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" for="save-info">¿Sumercé es proovedor?</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-mago"/>
            <label className="form-check-label" for="save-info">Do u like mango?</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-semestre"/>
            <label className="form-check-label" for="save-info">¿pase sumercé Profe?</label>
          </div>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Agregaaar!</button>
        </form>
      </div>
        </>
    )
 }
 export default AgregarPoducto;