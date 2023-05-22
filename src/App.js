import React, { useState, useEffect } from 'react';
import './App.css';
// import Header from './components/header';
// import ItemsList from './components/itemsList';
import {Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Fav from './pages/fav';
import NotFound from './pages/not-found';
import { useDispatch } from 'react-redux';
import { navigateToNewPage } from './redux/actions/navigateToNewPageAction';


function App() {
  const dispatch = useDispatch();
  const location = useLocation();

useEffect(() => {
    dispatch(navigateToNewPage());
    window.scrollTo(0, 0);
}, [dispatch, location]);
  
  return (

    <>

    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/cart" element={<Cart/>} />
        <Route path="/fav" element={<Fav/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
    
  );
}

export default App;