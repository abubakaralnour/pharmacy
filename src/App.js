//import { Container } from "react-bootstrap";
//import MainComp from "./Main";
import React from "react";
import Home from "./Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {

  
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/home" element="/home" />
</Routes>
</BrowserRouter>
<Home/>

</>


);
}

export default App;
