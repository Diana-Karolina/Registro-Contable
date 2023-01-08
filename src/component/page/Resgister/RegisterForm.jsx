import React from "react";
import {useForm} from "react-hook-form";
import InputText from "../../../shared/components/InputText";

const ResgisterForm = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm("onSubmit");

      const HandleRegister = async (e) => {
        console.log("Enviaste el formulario con exito", e);
        await axios.post("urldedianita.com/v1/register", {
          name: formRegisterId.Name,
          email: formRegisterId.Email,
          password: formRegisterId.Password,
        });
      };


      return (
        <form action="#" className="row" onSubmit={handleSubmit(HandleRegister)}>
          <div className="row ">

          <InputText
              identifier="Name"
              type="name"
              title="Nombre y apelido"
              register={register}
              validations={{
                required: { value: true, message: "llene el campo" },
                maxLength: {
                  value: 30,
                  message: "El nombre no puede tener mas de 30 caracteres",
                },
                minLength: {
                  value: 4,
                  message: "tiene que ingresar un nombre con mas de 4 caracteres",
                },
              }}
            />
            {errors.Name && <p className="text-danger">{errors.Name.message}</p>}
            <br />
            
            <InputText
              identifier="Email"
              type="email"
              title="Ingrese un email nuevo"
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
              title="Ingrese contraseña"
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
    
            <div className="row mt-3">
              <button type="submit" className="btn btn-primary col-md-2">
                Registrarse
              </button>
            </div>
          </div>
        </form>
      );
      

};

export default ResgisterForm;