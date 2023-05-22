import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import ItemsList from '../components/itemsList';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getItems } from '../redux/actions/itemsAction';
import { getFavs } from '../redux/actions/favsAction';
import { getOrders } from '../redux/actions/cartAction';


export default function Home() {
  const dispatch = useDispatch()
  //all items
  const items = useSelector(state => state.items.items)
  //favs
  const favs = useSelector(state => state.favs.favs)
  //orders
  const orders = useSelector(state => state.orders.orders)

  const [setOrders] = useState([]);
  //
  const [setFavs] = useState([]);
  // const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   fetch('/data/data.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setItems(data.products);
  //     })
  //     .catch(error => console.error(error));
  // }, []);


  useEffect(() => {
    dispatch(getItems())
  }, [dispatch]);

  


  //cart

  //  useEffect(() => {
  //   // Получаем данные из локального хранилища при монтировании компонента
  //   const ordersData = localStorage.getItem('orders');
  //   if (ordersData) {
  //     setOrders(JSON.parse(ordersData));
  //     setCartCount(JSON.parse(ordersData).length);
  //   }
  // }, []);
  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch]);


  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('orders', JSON.stringify(orders));
    setCartCount(orders.length);
  }, [orders]);

  //

  //fav
  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);
  //  useEffect(() => {
  //   // Получаем данные из локального хранилища при монтировании компонента
  //   const favsData = localStorage.getItem('favs');
  //   if (favsData) {
  //     setFavs(JSON.parse(favsData));
  //     // setCartCount(JSON.parse(favsData).length);
  //   }
  // }, []);


  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('favs', JSON.stringify(favs));
    // setCartCount(favs.length);
  }, [favs]);

  //


  return (
        <div className="wrapper">
      <Header orders={orders} favs={favs}  />
      <ItemsList items={items}  />
    </div>
  )
}
