import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import ItemsList from '../components/itemsList';
import {Link} from 'react-router-dom';


export default function Home() {

  const [orders, setOrders] = useState([]);
  const [favs, setFavs] = useState([]);
  const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        setItems(data.products);
      })
      .catch(error => console.error(error));
  }, []);


  //cart

   useEffect(() => {
    // Получаем данные из локального хранилища при монтировании компонента
    const ordersData = localStorage.getItem('orders');
    if (ordersData) {
      setOrders(JSON.parse(ordersData));
      setCartCount(JSON.parse(ordersData).length);
    }
  }, []);

  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('orders', JSON.stringify(orders));
    setCartCount(orders.length);
  }, [orders]);

  //

  //fav

   useEffect(() => {
    // Получаем данные из локального хранилища при монтировании компонента
    const favsData = localStorage.getItem('favs');
    if (favsData) {
      setFavs(JSON.parse(favsData));
      // setCartCount(JSON.parse(favsData).length);
    }
  }, []);

  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('favs', JSON.stringify(favs));
    // setCartCount(favs.length);
  }, [favs]);

  //

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
      setCartCount(cartCount + 1);
    }
  };

  const deleteFromOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
    setCartCount(cartCount - 1);
  };

  const addToFav = (item) => {
    let isInArray = false;
    favs.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setFavs([...favs, item]);
    }
  };

  const deleteFromFav = (id) => {
    setFavs(favs.filter(el => el.id !== id));
  };
  return (
        <div className="wrapper">
      <Header orders={orders} favs={favs} onDelete={deleteFromOrder} onDeleteFav={deleteFromFav} />
      <ItemsList items={items} onAdd={addToOrder} onAddToFav={addToFav} onDeleteFav={deleteFromFav} />
    </div>
  )
}
