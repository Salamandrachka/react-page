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
        <div className='wrapper'>
                       <header className='header-fav'> 
              <div>
                   
            <span className="logo">Luxury Bags</span>
            <span className='home-link'><Link to='/'>Home page</Link></span>
               </div>
           </header>
           <div className='text-fav'>
               <div className='text'>
                   <span>Favourites</span>
                   {/* <span>(item)</span> */}
               </div>
               <hr></hr>
        </div>
        <div className='shop-block'>
        {favs.map((el) => (
          <OrderElem onDeleteFav={handleDelete} key={el.id} item={el} type='fav' />
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
      {favs.length > 0 ? (
        <div className='shop-cart'>{showFavs()}</div>
      ) : (
        showNothing()
      )}
    </div>
  );
}

export default Fav;