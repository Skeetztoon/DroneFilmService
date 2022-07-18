import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
