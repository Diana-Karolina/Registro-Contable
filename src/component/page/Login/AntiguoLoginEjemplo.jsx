import React, { useState, useEffect } from "react";

function Login() {
  const inicialLogin = { Email: "diana@gmail.com", Password: "12dcf" };
  const [formLogin, setformLogin] = useState(inicialLogin);
  const [formError, setformError] = useState("");
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    setformLogin(e.target.value);
    validarFrom(formLogin)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("urldeestefito.com/v1/login", {
      Email: formLogin.Email,
      Password: formLogin.Password,
    });
    setisSubmit(true);
    console.log("Enviaste el formulario");
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formError);
    }
  }, [formError]);
  const validarFrom = (formValider) => {
    const errorForm = {};
    if (!value.Email) {
      errorForm.Email = "Email is required!";
    } else if (!errorvalidar.test(formValider.Email)) {
      errorForm.Email = "This is not a vali email";
    }
    if (!formValider.Password) {
      errorForm.Password = "password is a required!";
    } else if (formValider.Password.length < 8) {
      errorForm.Password = "Password must be more than 8 digits";
    } else if (formValider.Password.length > 12) {
      errorForm.Password = "Password cannot exceed more than 12 characters";
    }
    setformError(errorForm);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand tex-uppercase" href="/">
            Registro Contables
          </a>
        </div>
      </nav>
      <br />

      <div className="container py-4">
        <div className="row">
          <h1>Login</h1>
          <em>
            <h4>Register</h4>
          </em>
        </div>
        <form action="#" className="row" onSubmit={handleSubmit}>
          <div className="row ">
           
            <br />

            <div className="row mb-4">
              <label for="Password" class="form-label">
                <em>Contraseña</em>
              </label>
              <br />
              <input
                type="password"
                className="form-control-sm  col-md-4"
                id="Password"
                name="Password"
                placeholder="Ingrese contraseña"
                value={formLogin.Password}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className="row ">
              <button type="submit" className="btn btn-primary col-md-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
