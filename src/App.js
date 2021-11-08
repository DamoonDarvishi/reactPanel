import React, {useState, useEffect} from "react";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Login from "./component/auth/Login";
import Client from "./component/Client";
import Dashboard from "./component/dashboard/Dashboard";

function App() {
  const token = localStorage.getItem("token")

  return (
  <div>
    <BrowserRouter>
      <Routes>
      <Route
        path="/"    
        exact 
        element={<Client />}
      />
      <Route
          path="/login"    
          exact 
          element={<Login />}
        /> 
         <Route
          path="/dashboard"    
          exact 
          element={<Dashboard/>}
        />  
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
