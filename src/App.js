import React, { useState, useEffect } from 'react';
import './App.css';
// import Header from './components/header';
// import ItemsList from './components/itemsList';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Fav from './pages/fav';
import NotFound from './pages/not-found';


function App() {
  // const [orders, setOrders] = useState([]);
  // const [favs, setFavs] = useState([]);
  // const [items, setItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   fetch('/data/data.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setItems(data.products);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  // const addToOrder = (item) => {
  //   let isInArray = false;
  //   orders.forEach(el => {
  //     if (el.id === item.id) {
  //       isInArray = true;
  //     }
  //   });
  //   if (!isInArray) {
  //     setOrders([...orders, item]);
  //     setCartCount(cartCount + 1);
  //   }
  // };

  // const deleteFromOrder = (id) => {
  //   setOrders(orders.filter(el => el.id !== id));
  //   setCartCount(cartCount - 1);
  // };

  // const addToFav = (item) => {
  //   let isInArray = false;
  //   favs.forEach(el => {
  //     if (el.id === item.id) {
  //       isInArray = true;
  //     }
  //   });
  //   if (!isInArray) {
  //     setFavs([...favs, item]);
  //   }
  // };

  // const deleteFromFav = (id) => {
  //   setFavs(favs.filter(el => el.id !== id));
  // };

  return (
    // <div className="wrapper">
    //   <Header orders={orders} favs={favs} onDelete={deleteFromOrder} onDeleteFav={deleteFromFav} />
    //   <ItemsList items={items} onAdd={addToOrder} onAddToFav={addToFav} onDeleteFav={deleteFromFav} />
    // </div>
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