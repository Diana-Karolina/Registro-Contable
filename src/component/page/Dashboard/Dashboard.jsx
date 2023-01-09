import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const IsLogin = window.localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(() => {
        if(!IsLogin) navigate("/login");
    }, [IsLogin]);

    const handleLogOut = () => {
        window.localStorage.removeItem("token");
        navigate("/login");
    }

  return (
    <div>
        <h1>Esta es la pagina principal, bienvenido mi llave</h1>
        <button onClick={handleLogOut}>Cerrar Sesion</button>
    </div>
  )
}

export default Dashboard