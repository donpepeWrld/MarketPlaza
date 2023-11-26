import { useState } from "react";

const Login = () => {

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
                                <h2 className="text-center">Iniciar sesion</h2>
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
        </>
    )
}
export default Login;