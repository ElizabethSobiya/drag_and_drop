import React from 'react';
import './App.css';
// import Main from '../src/Components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import  Description from './Components/Description/Description'
import Product from './Components/Product/Product';
import Alignimgs from './Components/Alignitems/Alignimgs';


function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Description/>}/>
    <Route path = '/product' element ={<Product/>}/>
    <Route path='/alignItems' element = {<Alignimgs/>} />
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
