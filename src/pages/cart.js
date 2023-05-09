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
        <div>
            <header> 
              <div>
                <span><Link to='/'>Home page</Link></span>
                <span className="logo">Luxury Bags</span>
               </div>
           </header>
           <div>
               <div>
                   <span>Shopping Bag</span>
                   <span>(item)</span>
               </div>
               <hr></hr>
                </div>
        {orders.map((el) => (
          <OrderElem onDelete={handleDelete} key={el.id} item={el} type='cart' />
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
    <div>
      {orders.length > 0 ? (
        <div className='shop-cart'>{showOrders()}</div>
      ) : (
        showNothing()
      )}
      <Link to='/'>Back to Home</Link>
    </div>
  );
}

export default Cart;