import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  
  return (
    <>
    <nav>
      <div className="navbar navbar-dark bg-dark">
          <a className="navbar-brand tex-uppercase" href="/">
            <h3 >Registro Contables</h3>
          </a>
      </div>
    </nav>
      <div className="container py-4">
        <div className="row">
          <h1>Login</h1>
        </div>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;