import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import OrderElem from '../components/orderElem';

function Cart({ onDelete }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Получаем данные из локального хранилища при монтировании компонента
    const ordersData = localStorage.getItem('orders');
    if (ordersData) {
      setOrders(JSON.parse(ordersData));
    }
  }, []);

  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  const showOrders = () => {
    return (
         <div className='wrapper'>
             <header className='header-fav'>
              <div>
            <span className="logo">Luxury Bags</span>
            <span className='home-link'><Link to='/'>Home page</Link></span>
               </div>
           </header>
           <div className='text-fav'>
               <div className='text'>
                   <span>Shopping cart</span>
                   {/* <span>(item)</span> */}
               </div>
               <hr></hr>
        </div>
         <div className='shop-block'>
        {orders.map((el) => (
          <OrderElem onDelete={handleDelete} key={el.id} item={el} type='cart' />
        ))}
          </div>
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
    <div>
      {orders.length > 0 ? (
        <div className='shop-cart'>{showOrders()}</div>
      ) : (
        showNothing()
      )}
    </div>
  );
}

export default Cart;