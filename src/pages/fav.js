import React, {useEffect } from 'react';
import { Link} from 'react-router-dom';
import OrderElem from '../components/orderElem';
import { useDispatch, useSelector } from 'react-redux';
import { getFavs } from '../redux/actions/favsAction';

function Fav() {
  const favs = useSelector(state => state.favs.favs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  useEffect(() => {
    // Сохраняем обновленные данные в локальном хранилище
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);


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
          <OrderElem  key={el.id} item={el} type='fav' />
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
      {favs.length > 0 ? (
        <div className='shop-cart'>{showFavs()}</div>
      ) : (
        showNothing()
      )}
    </div>
  );
}

export default Fav;