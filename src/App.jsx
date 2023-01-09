import React from "react"
import Login from "./component/page/Login/Login"
import Register from "./component/page/Resgister/Register"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table from "./component/page/Main/Table";
import Dashboard from "./component/page/Dashboard/Dashboard";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/table",
      element: <Table/>,
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
