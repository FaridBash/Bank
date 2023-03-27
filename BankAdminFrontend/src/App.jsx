import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Customer from "./components/Customer";
import DepositPopup from "./components/depositPopup";
import Deposite from "./pages/DepositPage";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Home from "./pages/HomePage";


const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,    
  },
  {
    path: "/Deposit",
    element: <Deposite/>,    
  },
 
]);



function App() {
  

  return (
    <div className="App">
          <RouterProvider router={route}/>
    </div>
  );
}

export default App;
