import React, { useState } from 'react';
import { FaShoppingBag, FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import OrderElem from '../orderElem';
import {Routes, Route, Link } from 'react-router-dom';

const Header = ({ orders, favs, onDelete, onDeleteFav }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(prevState => !prevState);
    setFavOpen(false);
    // Сохраняем данные корзины в локальное хранилище
    if (!cartOpen) {
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  };

  const toggleFav = () => {
    setFavOpen(prevState => !prevState);
    setCartOpen(false);
  };

  const showOrders = () => {
    return (
      <div>
        {orders.map(el => (
          <OrderElem onDelete={onDelete} onDeleteFav={onDeleteFav} key={el.id} item={el} type='cart'/>
        ))}
      </div>
    );
  };

  const showFavs = () => {
    return (
      <div>
        {favs.map(el => (
          <OrderElem onDeleteFav={onDeleteFav} onDelete={onDelete} key={el.id} item={el} type='fav' />
        ))}
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>No items added</h2>
      </div>
    );
  };
  
  return (
    <header className='header-home'>
      <div>
        <span className="logo">Luxury Bags</span>
        <FaShoppingBag
          onClick={toggleCart}
          className={`shop-cart-btn ${cartOpen && 'active'}`}
        />
        {cartOpen && (
          <div className='shop-cart'>
            {orders.length > 0 ? showOrders() : showNothing()}
             <Link to='/cart'>Cart</Link>
          </div>
        )}
        <span className="cart-count">{orders.length}</span>

        <FaStar
          onClick={toggleFav}
          className={`shop-star-btn ${favOpen && 'active'}`}
        />
        {favOpen && (
          <div className='shop-cart'>
            {favs.length > 0 ? showFavs() : showNothing()}
            <Link to='/fav'>Favourites</Link>
          </div>
        )}
        <span className="fav-count">{favs.length}</span>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

Header.propTypes = {
  orders: PropTypes.array.isRequired,
  favs: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteFav: PropTypes.func.isRequired,
};

export default Header;


// Header.propTypes = {
//   orders: PropTypes.array.isRequired,
//   favs: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onDeleteFav: PropTypes.func.isRequired,
// };