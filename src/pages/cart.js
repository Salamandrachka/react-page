import React, {useEffect } from 'react';
import {Link} from 'react-router-dom';
import OrderElem from '../components/orderElem';
import { getOrders } from '../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  //orders
  const orders = useSelector(state => state.orders.orders)
  
  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch]);

  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

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
          <OrderElem key={el.id} item={el} type='cart' />
        ))}
          </div>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>No items added</h2>
        <span className='home-link'><Link to='/'>Home page</Link></span>
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