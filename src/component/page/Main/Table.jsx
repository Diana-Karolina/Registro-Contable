import React from "react";
import TableFrom from "./TableForm";

const Table = () =>{
    return(
        <>
        <nav>
          <div className="navbar navbar-dark bg-dark">
           <a className="navbar-brand tex-uppercase" href="/">
            <h2>Accounting Record</h2>
           </a>
         </div>
        </nav>
        <div className="container py-4 ">
        <div className="row">
          <h2>Product Registration</h2>
        </div>
        <TableFrom/>
      </div>
        </>
    )
}

export default Table;