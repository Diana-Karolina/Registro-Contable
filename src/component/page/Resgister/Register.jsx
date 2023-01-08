import React from "react";
import ResgisterForm from "./RegisterForm"



function Register() {
    
    return(
        <>
        <nav>
          <div className="navbar navbar-dark bg-dark">
           <a className="navbar-brand tex-uppercase" href="/">
            <h3>Registro Contables</h3>
           </a>
         </div>
        </nav>
        <div className="container py-4">
        <div className="row">
          <h1>Register</h1>
        </div>
        <ResgisterForm/>
      </div>
        </>
    )
}

export default Register;