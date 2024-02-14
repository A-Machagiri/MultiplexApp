import "./App.css";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Slider from "./components/Slider";
import Bookticket from "./components/Bookticket";
import Movies from "./components/Movies";
import SignUp from "./components/signup";
import React from 'react';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar1/>
  
      <Routes>
        <Route  path="/" element={<><Slider /><Movies/> </>}/>
        <Route  path="/movies" element= {<Movies/>} />
        <Route path="/booking/:title" element={ <Bookticket/> }/>
        <Route path="/log" element= {<Login/>} />
        <Route path="/signup" element= {<SignUp />} />
      
      </Routes>
      </>
  );
}

export default App;