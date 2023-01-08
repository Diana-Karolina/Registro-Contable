import { useState } from "react";
import { useForm } from "react-hook-form";

function TableForm() {

  const [ProductsList, setProductsList] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const AddProduct = (e) => {
    console.log(e)
    setProductsList([...ProductsList, e]);
    reset();
  };

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit(AddProduct)}
        style={{ display: "flex", flexDirection: "column" }}
        action=""
      >
        <input
          style={{ marginTop: "1.5rem" }}
          type="text"
          placeholder="Nombre del producto"
          {...register("nameAgg", {
            required: {value: true, message: "El nombre del producto es requerido"},
            maxLength: {value: 100, message: "El nombre del producto no puede tener mas de 100 caracteres"},
            minLength: {value: 2, message: "El nombre del producto no puede tener menos de 5 caracteres"},
          })}
        />
        {errors.nameAgg &&  <p>{errors.nameAgg.message}</p>}

        <input
          style={{ marginTop: "1.5rem" }}
          type="text"
          placeholder="Precio del producto"
          {...register("precioAgg", {
            required: true,
            maxLength: 1000.00,
            minLength: 0,
          })}
        />

        <input
          className="container py-4"
          style={{ marginTop: "1.5rem" }}
          type="text"
          placeholder="Descripcion del producto"
          {...register("descriptionAgg", {
            required: true,
            maxLength: 300,
            minLength: 2,
          })}
        />

        <input style={{ marginTop: "1.5rem" }} type="submit" value={"Enviar"} className="btn btn-primary col-md-2"/>
      </form>
      <br />
      <div>
        <h2>Product Table</h2>
        <table className="table">
            <thead className="thead-dark">
                <tr style={{border: "1px solid black"}}>
                    <th scope="col">id</th> <br/>
                    <th scope="col">NAME</th> <br/>
                    <th scope="col">DESCRIPTION</th> <br />
                    <th scope="col">PRICE</th> <br/>
                </tr>
            </thead>
            <tbody>
                {ProductsList.map((el, index) => {
                    return <tr  key={index}>
                        <td scope="row">{index} </td> <br />
                        <td scope="row">{el.nameAgg}</td><br />
                        <td scope="row">{el.descriptionAgg}</td><br />
                        <td scope="row"> {el.precioAgg}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
    </div>
  );
}

export default TableForm;