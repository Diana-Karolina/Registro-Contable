import React, { useState } from "react";

const Register = () =>{
    const inicialRegister = {"Email" : "kaliestefano@gmail.com",
    "Nombre" : "Estefano Chuquicusma",
    "Identificacion" : "1729204576001",
    "Password" : "kali123",};
    const [FormRegis ,setFormRegis] = useState(inicialRegister);




    return(
        <form onSubmit={RegisterSubmit}>
        <h2>Login</h2>
        <div>
          <div>
            <label>E-mail</label>
            <input type="text" 
            name="correo" 
            id="Email" 
            placeholder="Ingrese el correo" 
           />
          </div>

          <div>
            <label>Nombres</label>
            <input type="text" 
            name="nombre" 
            id="Nombre" 
            placeholder="Ingrese el correo" 
            />
          </div>

          <div>
            <label>Identificacion</label>
            <input type="text" 
            name="Identificacion" 
            id="Identificacion" 
            placeholder="Ingrese el correo" 
           />
          </div>

          <div>
            <label>Password</label>
            <input type="Password" 
            name="contraseña" 
            id="Password" 
            placeholder="Ingrese su contraseña" 
            />
          </div>
          <button>Resgistrar</button>
        </div>
      </form>
    )
}