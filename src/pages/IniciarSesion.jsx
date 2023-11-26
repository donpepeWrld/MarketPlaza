import { useState } from "react";

const IniciarSesion = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log("Email", email);
        console.log("Contraseña", password);

        const userData={
            email: email,
            contrasña: password,
        };

        fetch("https://private-99dba-login653.apiary-mock.com/login",{
            method:"POST",
        headers:{
            "content-Type":"aplication/json",
        },
        body: JSON.stringify(userData),
        })
        .then((response)=>{
            if(response.status===200){
                return response.json();
            }else if(response.status ===401){
                return response.json();
            }else{
                throw new Error("Error desconocido");
            }
        })
        .then((data)=>{
            if(data.mensaje==="Inicio de sesión exitoso"){
                if(userData.email==="diego@santoto.edu.co"&& userData.contrasña=="123456"){
                    console.log("Inicio de sesión exitoso");
                }else{
                    console.log("Inicio de sesion fallido: Datos incorrectos");
                }
            }else if (data.mensaje==="Inicio de sesión fallido"){
                console.log("Inicio de sesión fallido");
            }else{
                console.log("Respuesta inesperada de API");
            }
        })
        .catch((error)=>{
            console.log("Error en la solicitud" + {error});
        });
        
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6" > 
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Iniciar sesion🥕</h2>
                                <form onSubmit={handleSumbit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-lable">
                                            Correo electronico
                                        </label>
                                        <input type="email" id="email" className="form-control" value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required/>
                                            
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-lable">
                                            Contraseña
                                        </label>
                                        <input type="password" id="password" className="form-control" value={password}
                                         onChange={(e)=>setPassword(e.target.value)} 
                                         required/>
                                    </div>
                                    <div className="text-center">
                                        <button type="sumbit" className="btn btn-primary">Iniciar sesion</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* esto es features */}

<div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom text-center">Informacion Necesaria</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-1 ">
      <div className="feature col">
        <h3 className="fs-2 text-body-emphasis text-center">Sobre nosotros</h3>
        <p>En MarketPlaza nos dedicamos a fortalecer la comunidad local conectando a vendedores y consumidores en Tunja y toda la región de Boyacá. Nuestra misión es impulsar la economía local y promover la riqueza cultural de Boyacá al proporcionar un espacio digital donde los productos y servicios locales puedan prosperar y ser descubiertos.</p>
        <h3>Vision:</h3>
        <p>Aspiramos a ser el principal destino en línea para descubrir y apoyar los tesoros locales de Boyacá. Queremos crear una red sólida donde los vendedores locales encuentren el apoyo que necesitan para hacer crecer sus negocios, y donde los consumidores disfruten de una experiencia de compra única, respaldando la diversidad y autenticidad de los productos de la región.</p>
      <h3>Compromiso con Boyacá</h3>
      <p>Aunque nuestro alcance abarca toda Colombia, tenemos un enfoque especial en resaltar la belleza y autenticidad de Boyacá. Colaboramos estrechamente con los vendedores de la región, apoyándolos en su crecimiento y destacando la calidad única de los productos boyacenses.</p>
      <p>"Tunja Conecta" es más que un marketplace; es una comunidad que celebra la identidad y el talento de Boyacá, conectando corazones locales con productos que cuentan historias y representan la esencia misma de nuestra amada región. ¡Únete a nosotros en este viaje para fortalecer y conectar a Boyacá, una compra a la vez!</p>
      </div>
    </div>
  </div>

        </>
    )
}
export default IniciarSesion;