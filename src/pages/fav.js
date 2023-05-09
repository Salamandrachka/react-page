import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderElem from '../components/orderElem';

function Fav({ onDeleteFav }) {
    const [favs, setFavs] = useState([]);

  useEffect(() => {
    // Получаем данные из локального хранилища при монтировании компонента
      const favsData = localStorage.getItem('favs');
    if (favsData) {
      setFavs(JSON.parse(favsData));
    }
  }, []);

  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);



  const handleDelete = (id) => {
    const updatedFavs = favs.filter((fav) => fav.id !== id);
    setFavs(updatedFavs);

  };

  const showFavs= () => {
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
                   <span>Favourites</span>
                   <span>(item)</span>
               </div>
               <hr></hr>
                </div>
        {favs.map((el) => (
          <OrderElem onDeleteFav={handleDelete} key={el.id} item={el} type='fav' />
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
      {favs.length > 0 ? (
        <div className='shop-cart'>{showFavs()}</div>
      ) : (
        showNothing()
      )}
      <Link to='/'>Back to Home</Link>
    </div>
  );
}

export default Fav;