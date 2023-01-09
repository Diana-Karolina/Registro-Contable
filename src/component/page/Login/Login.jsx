import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const IsLogin = window.localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (IsLogin) navigate("/");
  }, [IsLogin]);

  return (
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
          <h1>Login</h1>
        </div>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
