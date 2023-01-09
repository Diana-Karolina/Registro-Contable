import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputText from "../../../shared/components/InputText";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm("onSubmit");

  const navigate = useNavigate();

  const [ErrorLogin, setErrorLogin] = useState(null);

  const HandleLogin = async (e) => {
    try {
      console.log("Enviaste el formulario", e);
    //es de ejmplo, no funciona de verdad xd
    const res = await axios.post("https://localhost:7023/api/Authentication/Login", {
      Email: e.Email,
      Password: e.Password,
    });
    console.log(res);
    console.log(res.data);

    window.localStorage.setItem("token", res.data);
    navigate("/")
    }
    catch(error) {
      setErrorLogin(true);
      setTimeout(() => {
        setErrorLogin(null);
      }, 2500);
      console.log(error);
    }
  };

  return (
    <form action="#" className="row" onSubmit={handleSubmit(HandleLogin)}>
      <div className="row ">
        <InputText
          identifier="Email"
          type="email"
          title="Ingrese su email"
          register={register}
          validations={{
            required: { value: true, message: "Email es requerido" },
            maxLength: {
              value: 300,
              message: "Email no puede tener mas de 300 caracteres",
            },
            minLength: {
              value: 6,
              message: "Email no puede tener menos de 6 caracteres",
            },
          }}
        />
        {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
        <br />

        <InputText
          identifier="Password"
          type="password"
          title="Ingrese su contraseña"
          register={register}
          validations={{
            required: { value: true, message: "Contraseña es requerido" },
            maxLength: {
              value: 300,
              message: "Contraseña no puede tener mas de 300 caracteres",
            },
            minLength: {
              value: 6,
              message: "Contraseña no puede tener menos de 6 caracteres",
            },
          }}
        />
        {errors.Password && (
          <p className="text-danger">{errors.Password.message}</p>
        )}
        <br />
          {ErrorLogin !== null && <p>Error al inciar sesion, el usuario no existe o esta incorrecto!</p>}
        <div className="row mt-3">
          <button type="submit" className="btn btn-primary col-md-2">
            Submit
          </button>
        </div>
        <br />
        <p>Si no tienes cuenta</p>
      </div>
    </form>
  );
};

export default LoginForm;
